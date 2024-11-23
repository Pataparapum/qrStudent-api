import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';
import { salaDto } from 'src/dto/sala.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalasService {

    constructor(private prisma:PrismaService){}

    async createSala(sala:salaDto, response:Response): Promise<Response> {
        await this.prisma.salas.create({data:sala}).catch((err) => {
            return response.json({err});
        });

        return response.json({status:201});
    }

    async deleteSala(salaId:string, response:Response): Promise<Response> {
        await this.prisma.salas.delete({
            where: {
                id: salaId
            }
        }).catch((err) => {
            return response.json({err})
        });

        return response.json({status:200});
    }

    async updateSala(sala:salaDto, response:Response): Promise<Response> {
        await this.prisma.salas.update({
            where: {
                id: sala.id
            },
            data: sala
        }).catch((err)=> {
            response.json({err})
        });

        return response.json({status:200});

    }

    async getSala(salaId:string, response:Response): Promise<Response> {
        const data = await this.prisma.salas.findUnique({
            where: {
                id: salaId
            }
        }).catch((err) => {
            return response.json({err})
        });

        return response.json({status:200, data});
    }


    async getAllSala(response:Response): Promise<Response> {
        const data = await this.prisma.salas.findMany().catch((err)=>{
            return response.json({err});
        });

        return response.json({status:200, data});
    }
}
