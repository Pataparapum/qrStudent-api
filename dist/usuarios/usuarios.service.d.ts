import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { logDto } from 'src/dto/logDto';
import { userDto } from 'src/dto/userDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsuariosService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    getUserWithEmail(correo: string): Promise<userDto>;
    resgisterUser(newUser: userDto, response: Response): Promise<Response<any, Record<string, any>>>;
    deleteUser(correo: string, response: Response): Promise<Response<any, Record<string, any>>>;
    login(logInfo: logDto, response: Response): Promise<Response<any, Record<string, any>>>;
    logout(req: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
