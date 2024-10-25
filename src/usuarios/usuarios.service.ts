import { user } from './../../node_modules/.prisma/client/index.d';
import { Injectable} from '@nestjs/common';
import { log } from 'console';
import { Response } from 'express';
import { logDto } from 'src/dto/logDto';
import { userDto } from 'src/dto/userDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuariosService {

    constructor(private prisma:PrismaService) {}

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
       this.prisma.user.create({data:newUser})

       return response.status(200).json({status:200, message:'Usuario creado con exito'})
    }

    async login(logInfo:logDto, response:Response) {
        const user:userDto = await this.prisma.user.findUnique({
            where: {
                email: logInfo.email
            }
        });

        if (user) {
            return response.status(200).json({loggin:true});
        }
        return response.status(404).json({loggin:false});

    }
}
    
