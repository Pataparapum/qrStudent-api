import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Response } from 'express';
import { userDto } from 'src/dto/userDto';
import { logDto } from 'src/dto/logDto';

@Controller('usuarios')
export class UsuariosController {

    constructor(private user: UsuariosService) {}
    
    @Get(':correo') 
    obtenerUsuarios(@Param('correo') correo:string): Promise<userDto> {
        return this.user.getUserWithEmail(correo);
    }

    @Post()
    agregarUsuario(@Body() user:userDto, @Res() response: Response) {
        return this.user.resgisterUser(user, response);
    }

    @Post('login')
    login(@Body() logData:logDto, @Res() response:Response) {
        return this.user.login(logData, response);
    }
}
