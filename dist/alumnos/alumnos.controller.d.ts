import { AlumnosService } from './alumnos.service';
import { alumonDto } from 'src/dto/alumno.dto';
import { Response } from 'express';
export declare class AlumnosController {
    private service;
    constructor(service: AlumnosService);
    addAlumno(correo: string, alumno: alumonDto, response: Response): Promise<Response<any, Record<string, any>>>;
    updateAlumno(id: string, alumno: alumonDto, response: Response): Promise<Response<any, Record<string, any>>>;
    deleteAlumno(alumnoId: string, response: Response): Promise<Response<any, Record<string, any>>>;
    getAllAlumno(response: Response): Promise<Response<any, Record<string, any>>>;
    getAlumnoForId(alumnoId: string, response: Response): Promise<Response<any, Record<string, any>>>;
    getAlumnoInfo(id: string, response: Response): Promise<Response<any, Record<string, any>>>;
}
