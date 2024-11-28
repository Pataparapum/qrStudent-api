import { Response } from 'express';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { asistenciaDto } from '../dto/asistencia.dto';

@Injectable()
export class AsistenciaService {

    constructor(private prisma:PrismaService){}

    async addAsistencia(info:asistenciaDto,curso:string, response:Response){
        const {salaId, alumnoId, asistencia, justificado} = info;
        const data = await this.prisma.alumnos.findUnique({
            where: {
                id: alumnoId
            }
        })

        const sala = await this.prisma.salas.findFirst({
            where: {
                alumnoid: alumnoId,
                curso:curso
            }
        })

        if (data) {
            const asistenciaData = {
                date: new Date(),
                alumnoId: data.id,
                salaId,
                asistencia,
                justificado

            };

            await this.prisma.asistencia.create({data: asistenciaData}).catch((err) => {
                return response.json({err});
            });

            return response.json({status:201});
        }
    }

    async alterAsistencia(id:string, data:asistenciaDto, response:Response) {

        const justificado = await this.prisma.asistencia.findUnique({
            where: {
                id: id,
            },
            select: {
                asistencia:true
            }
        })

        if(justificado.asistencia) {
            await this.prisma.asistencia.update({
                where:{
                    id:id
                },
                data: {
                    asistencia: data.asistencia, 
                }
            }).catch((err) => {
                return response.json({err});
            });

        } else {
            await this.prisma.asistencia.update({
                where:{
                    id:id
                },
                data: {
                    asistencia: data.asistencia, 
                    justificado: data.justificado
                }
            }).catch((err) => {
                return response.json({err});
            });
        }

 
        return response.json({status:200});
    }

    async getAsistenciaForSala(id:string, response:Response) {
        const data = await this.prisma.asistencia.findMany({
            where: {
                salaId:id
            }
        })

        if (data) {
            return response.json({status:200, data});
        } else return response.json({error:"no hay asistencias asociadas a la sala"})
    }
}
