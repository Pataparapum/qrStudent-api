import { AsistenciaService } from './asistencia.service';
import { Response } from 'express';
import { asistenciaDto } from 'src/dto/asistencia.dto';
export declare class AsistenciaController {
    private service;
    constructor(service: AsistenciaService);
    markAsistencia(asistencia: asistenciaDto, response: Response): Promise<Response<any, Record<string, any>>>;
    updateAsistencia(id: string, asistencia: asistenciaDto, response: Response): Promise<Response<any, Record<string, any>>>;
    getAllAsistenciasForSala(id: string, response: Response): Promise<Response<any, Record<string, any>>>;
}
