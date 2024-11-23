import { Body, Delete, Get, Controller, Param, Post, Put, Res } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { alumonDto } from 'src/dto/alumno.dto';
import { Response } from 'express';

@Controller('alumnos')
export class AlumnosController {
    
  constructor(private service:AlumnosService){}

  @Post()
  addAlumno(@Body() alumno:alumonDto, @Res() response:Response){
    return this.service.addEstudent(alumno, response);
  }

  @Put()
  updateAlumno(@Body() alumno:alumonDto, @Res() response:Response) {
    return this.service.updateEstudent(alumno, response);
  }

  @Delete(':id')
  deleteAlumno(@Param('id') alumnoId:string, @Res() response:Response) {
    return this.service.deleteEstudent(alumnoId, response);
  }

  @Get()
  getAllAlumno(@Res() response:Response){
    return this.service.getAlumnos(response);
  }

  @Get(':id')
  getAlumnoForId(@Param('id') alumnoId:string, @Res() response:Response) {
    return this.service.getAlumnoForId(alumnoId, response);
  }
}
