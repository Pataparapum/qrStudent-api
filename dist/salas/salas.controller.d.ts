import { SalasService } from './salas.service';
import { salaDto } from 'src/dto/sala.dto';
import { Response } from 'express';
export declare class SalasController {
    private service;
    constructor(service: SalasService);
    addSala(sala: salaDto, response: Response): Promise<Response<any, Record<string, any>>>;
    deleteSala(salaId: string, response: Response): Promise<Response<any, Record<string, any>>>;
    updateSala(id: string, sala: salaDto, response: Response): Promise<Response<any, Record<string, any>>>;
    getAllSala(response: Response): Promise<Response<any, Record<string, any>>>;
    getSalaFororId(salaId: string, response: Response): Promise<Response<any, Record<string, any>>>;
    getAlumnoForCurso(curso: string, response: Response): Promise<Response<any, Record<string, any>>>;
    getAsistenciaForCurso(curso: string, response: Response): Promise<Response<any, Record<string, any>>>;
}
