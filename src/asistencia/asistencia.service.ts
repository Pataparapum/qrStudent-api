import { Response } from 'express';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AsistenciaService {

    constructor(private prisma:PrismaService){}

    async addAsistencia(info: {salaId:string, alumnoId:string, asistencia:boolean, justificado:boolean} , response:Response){
        const {salaId, alumnoId, asistencia, justificado} = info;
        const data = await this.prisma.alumnos.findUnique({
            where: {
                id: alumnoId
            }
        }).catch((err) => {
            return response.json({err});
        });

        if (data) {
            const asistenciaData = {
                date: new Date(),
                alumnoId,
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

    async alterAsistencia(data: {asistenciaId:string, asiste:boolean, justificado:boolean}, response:Response) {
        await this.prisma.asistencia.update({
            where:{
                id:data.asistenciaId
            },
            data: {
                asistencia: data.asiste,
                justificado: data.justificado
            }
        }).catch((err) => {
            return response.json({err});
        });

        return response.json({status:200});
    }
}
