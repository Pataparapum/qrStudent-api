import { alumonDto } from './../dto/alumno.dto';
import { Response } from 'express';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { userDto } from 'src/dto/userDto';
import { error } from 'console';

@Injectable()
export class AlumnosService {
    
    constructor(private prisma:PrismaService) {}

    async addEstudent(correo:string, alumno:alumonDto, response:Response): Promise<Response> {

        const usuario = await this.prisma.user.findUnique({
            where: {
                email: correo
            }
        });

        if(usuario.email) {
            alumno.userId = usuario.id;
            await this.prisma.alumnos.create({data:alumno}).catch((err) => {
                return response.json({err});
            });
            return response.json({status:201});

        } else return response.json({error:"el usuarios no existe"});

        
    }

    async updateEstudent(id:string, alumno:alumonDto, response:Response): Promise<Response> {
        
        await this.prisma.alumnos.update({
            where: {
                id: id
            },
            data: {
                full_name: alumno.full_name
            }
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

    async getAllAlumnoData(id:string, response:Response) {
        const data = await this.prisma.alumnos.findUnique({
            where: {
                id:id
            },
            select: {
                full_name: true,
                salas: {
                    select: {
                        curso: true,
                        asistencia: {
                            select: {
                                date: true,
                                asistencia: true,
                                justificado: true
                            },
                        },
                    },
                },
            },
        });


        if (data) {
            return response.json({status:200, data})
            
        } else return response.json({error:"alumno no encontrado"})
    }
}
