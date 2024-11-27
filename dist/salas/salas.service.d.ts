import { Response } from 'express';
import { salaDto } from 'src/dto/sala.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SalasService {
    private prisma;
    constructor(prisma: PrismaService);
    createSala(sala: salaDto, response: Response): Promise<Response>;
    deleteSala(salaId: string, response: Response): Promise<Response>;
    updateSala(id: string, sala: salaDto, response: Response): Promise<Response>;
    getSala(salaId: string, response: Response): Promise<Response>;
    getAllSala(response: Response): Promise<Response>;
    getAlumnoOfCurso(curso: string, response: Response): Promise<Response<any, Record<string, any>>>;
    getAsistenciaForCurso(curso: string, response: Response): Promise<Response<any, Record<string, any>>>;
}
