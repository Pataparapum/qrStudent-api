import { alumonDto } from './../dto/alumno.dto';
import { Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AlumnosService {
    private prisma;
    constructor(prisma: PrismaService);
    addEstudent(correo: string, alumno: alumonDto, response: Response): Promise<Response>;
    updateEstudent(id: string, alumno: alumonDto, response: Response): Promise<Response>;
    deleteEstudent(alumnoId: string, response: Response): Promise<Response>;
    getAlumnoForId(alumnoId: string, response: Response): Promise<Response>;
    getAlumnos(response: Response): Promise<Response>;
    getAllAlumnoData(id: string, response: Response): Promise<Response<any, Record<string, any>>>;
}
