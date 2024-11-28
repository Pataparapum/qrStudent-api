import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { salaDto } from '../dto/sala.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SalasService {

    constructor(private prisma:PrismaService){}

    async createSala(sala:salaDto, response:Response): Promise<Response> {
        const data = await this.prisma.salas.findFirst({
            where: {
                curso: sala.curso,
                alumnoid: sala.alumnoid
            }
        })

        if (data) return response.json({error: "un alumno no puede estar registrado dos veces en la misma clase"});

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

    async updateSala(id:string, sala:salaDto, response:Response): Promise<Response> {
        await this.prisma.salas.update({
            where: {
                id: id
            },
            data: {
                curso: sala.curso
            }
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

    async getAlumnoOfCurso(curso:string, response:Response) {
        const data = await this.prisma.salas.findMany({
            where: {
                curso: curso,
            },
            select: {
                curso: true,
                alumno: {
                    select: {
                        full_name: true,
                    }
                }
            }
        })

        if (data) {
            return response.json({status:200, data});
        } else return response.json({error:"no hay cursos con el nombre " + curso})
    }

    async getAsistenciaForCurso(curso:string, response:Response) {
        const data = await this.prisma.salas.findMany({
            where: {
                curso: curso,
            },
            select: {
                curso: true,
                asistencia: {
                    select: {
                        alumno: {select:{full_name:true}},
                        date: true,
                        asistencia: true,
                        justificado: true,
                    }
                }
            }
        })

        if (data) {
            return response.json({status:200, data});
        } else return response.json({error:"no hay cursos con el nombre " + curso})
        
    }
}
