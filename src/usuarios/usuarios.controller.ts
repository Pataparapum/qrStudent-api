import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Response } from 'express';

@Controller('usuarios')
export class UsuariosController {

    constructor(private user: UsuariosService) {}
    
    @Get() 
    obtenerUsuarios(@Res() response:Response) {
        return this.user.obtenerUsuarios(response);
    }

    @Post()
    agregarUsuario(@Body() user: {nombre:string, password:string}, @Res() response: Response) {
        return this.user.resgisterUser(user.nombre, user.password, response);
    }
}
