import { Body, Delete, Get, Controller, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { alumonDto } from '../dto/alumno.dto';
import { Response } from 'express';
import { logginGuard } from '../guards/login.guard';

@Controller('alumnos')
export class AlumnosController {
    
  constructor(private service:AlumnosService){}

  @Post(':correo')
  addAlumno(@Param('correo') correo:string, @Body() alumno:alumonDto, @Res() response:Response){
    return this.service.addEstudent(correo, alumno, response);
  }

  @UseGuards(logginGuard)
  @Put(':id')
  updateAlumno(@Param('id') id:string, @Body() alumno:alumonDto, @Res() response:Response) {
    return this.service.updateEstudent(id, alumno, response);
  }

  @UseGuards(logginGuard)
  @Delete(':id')
  deleteAlumno(@Param('id') alumnoId:string, @Res() response:Response) {
    return this.service.deleteEstudent(alumnoId, response);
  }

  @Get()
  getAllAlumno(@Res() response:Response){
    return this.service.getAlumnos(response);
  }

  @UseGuards(logginGuard)
  @Get(':id')
  getAlumnoForId(@Param('id') alumnoId:string, @Res() response:Response) {
    return this.service.getAlumnoForId(alumnoId, response);
  }

  @UseGuards(logginGuard)
  @Get('info/:id')
  getAlumnoInfo(@Param('id') id:string, @Res() response:Response) {
    return this.service.getAllAlumnoData(id, response);
  }
}
