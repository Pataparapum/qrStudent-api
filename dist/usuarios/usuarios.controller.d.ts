import { UsuariosService } from './usuarios.service';
import { Request, Response } from 'express';
import { userDto } from 'src/dto/userDto';
import { logDto } from 'src/dto/logDto';
export declare class UsuariosController {
    private user;
    constructor(user: UsuariosService);
    obtenerUsuarios(correo: string): Promise<userDto>;
    agregarUsuario(user: userDto, response: Response): Promise<Response<any, Record<string, any>>>;
    login(logData: logDto, response: Response): Promise<Response<any, Record<string, any>>>;
    logout(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
    deleteUser(correo: string, response: Response): Promise<Response<any, Record<string, any>>>;
}
