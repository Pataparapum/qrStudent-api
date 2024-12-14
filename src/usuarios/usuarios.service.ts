import { Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import * as hash from 'bcrypt'
import { logDto } from '../dto/logDto';
import { userDto } from '../dto/userDto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsuariosService {

    constructor(private prisma:PrismaService, private jwt:JwtService) {}

    getUserWithEmail(correo:string): Promise<userDto> {
        return this.prisma.user.findUnique({
            where: {
                email: correo,
            }
        });
    }

    async resgisterUser(newUser:userDto, response:Response) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: newUser.email
            }
        })

        if (user) {
            return response.status(500).json({status:500, error:'Error, el usuario ya existe'});
        } 
        
        newUser.password = await hash.hash(newUser.password, 10);
        
        await this.prisma.user.create({data:newUser}).catch((err) => {
            return response.json({err})
        })

        return response.status(200).json({status:200, message:'Usuario creado con exito'})
    }

    async deleteUser(correo:string, response:Response) {
        await this.prisma.user.delete({
            where: {
                email: correo,
            }
        }).catch((err) => {
            return response.json({err});
        })

        return response.json({status:200});
    }

    async login(logInfo:logDto, response:Response) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: logInfo.email
            }
        });

        const isMatch = hash.compareSync(logInfo.password, user.password);
        
        if (!isMatch) { 
            throw new UnauthorizedException({message:"contraseña o email incorrectos"});
        }
        const payload = {sub: user.id, username:user.username};
        
        const token = await this.jwt.signAsync(payload)

        return response.setHeader('x-access-token', `Bearer ${token}`)
                       .json({token, payload})

    }

    async logout(req:Request, response:Response) {
        try {
            const authHeader =  req.headers['authorization'];

            if(!authHeader) return response.sendStatus(204);

            response.removeHeader('authorization')

            return response.json({status:200, message:'Sesion cerrada con exito'});
        } catch(err) {
            return response.json({status:500, error:"internal server error"});
        }
    }
}
    
