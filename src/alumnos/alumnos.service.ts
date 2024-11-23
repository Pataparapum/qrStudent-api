import { alumonDto } from './../dto/alumno.dto';
import { Response } from 'express';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlumnosService {
    
    constructor(private prisma:PrismaService) {}

    async addEstudent(alumno:alumonDto, response:Response): Promise<Response> {
        await this.prisma.alumnos.create({data:alumno}).catch((err) => {
            return response.json({err});
        });
        return response.json({status:201});
    }

    async updateEstudent(alumno:alumonDto, response:Response): Promise<Response> {
        await this.prisma.alumnos.update({
            where: {
                id: alumno.id
            },
            data: alumno
        }).catch((err) => {
            return response.json({err})
        });

        return response.json({status:200});
    }

    async deleteEstudent(alumnoId:string, response:Response): Promise<Response> {
        await this.prisma.alumnos.delete({
            where:{
                id:alumnoId
            }
        }).catch((err) => {
            return response.json({err});
        });

        return response.json({status:200});
    }

    async getAlumnoForId(alumnoId:string, response:Response): Promise<Response> {
        const data = await this.prisma.alumnos.findUnique({
            where:{
                id:alumnoId
            }
        }).catch((err) => {
            return response.json({err});
        });

        return response.json({data});
    }

    async getAlumnos(response:Response): Promise<Response> {
        const data = await this.prisma.alumnos.findMany().catch((err) => {
            return response.json({err});
        });

        return response.json({data})
    }
}
