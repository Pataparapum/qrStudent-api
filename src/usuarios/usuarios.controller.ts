import { Body, Controller, Delete, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Request, Response } from 'express';
import { userDto } from '../dto/userDto';
import { logDto } from '../dto/logDto';
import { logginGuard } from '../guards/login.guard';

@Controller()
export class UsuariosController {

    constructor(private user: UsuariosService) {}
    
    @Get('/usuarios/:correo') 
    @UseGuards(logginGuard)
    obtenerUsuarios(@Param('correo') correo:string): Promise<userDto> {
        return this.user.getUserWithEmail(correo);
    }

    @Post('usuarios')
    agregarUsuario(@Body() user:userDto, @Res() response: Response) {
        return this.user.resgisterUser(user, response);
    }

    @Post('/usuarios/login')
    login(@Body() logData:logDto, @Res() response:Response) {
        return this.user.login(logData, response);
    }

    @Post('/usuarios/logout') 
    @UseGuards(logginGuard)
    logout(@Req() request:Request, @Res() response:Response ) {
        return this.user.logout(request, response);
    }

    @Delete(':correo')
    @UseGuards(logginGuard)
    deleteUser(@Param('correo') correo:string,@Res() response:Response) {
        return this.user.deleteUser(correo, response)
    }

    @Get()
    holaPruena(@Res() response:Response) {
        return response.json({hola: "hola mundo"});
    }
}
