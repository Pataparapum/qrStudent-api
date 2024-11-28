import { Body, Controller, Delete, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Request, Response } from 'express';
import { userDto } from '../dto/userDto';
import { logDto } from '../dto/logDto';
import { logginGuard } from '../guards/login.guard';

@Controller('usuarios')
export class UsuariosController {

    constructor(private user: UsuariosService) {}
    
    @Get(':correo') 
    @UseGuards(logginGuard)
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

    @Post('logout') 
    @UseGuards(logginGuard)
    logout(@Req() request:Request, @Res() response:Response ) {
        return this.user.logout(request, response);
    }

    @Delete(':correo')
    @UseGuards(logginGuard)
    deleteUser(@Param('correo') correo:string,@Res() response:Response) {
        return this.user.deleteUser(correo, response)
    }

    @Get('prueba')
    holaPruena(@Res() response:Response) {
        return response.json({hola: "hola mundo"});
    }
}
