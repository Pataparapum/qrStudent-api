import { Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { asistenciaDto } from 'src/dto/asistencia.dto';
export declare class AsistenciaService {
    private prisma;
    constructor(prisma: PrismaService);
    addAsistencia(info: asistenciaDto, response: Response): Promise<Response<any, Record<string, any>>>;
    alterAsistencia(id: string, data: asistenciaDto, response: Response): Promise<Response<any, Record<string, any>>>;
    getAsistenciaForSala(id: string, response: Response): Promise<Response<any, Record<string, any>>>;
}
