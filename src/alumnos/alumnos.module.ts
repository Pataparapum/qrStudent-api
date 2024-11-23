import { Body, Delete, Get, Module, Param, Post, Put, Res } from '@nestjs/common';
import { AlumnosController } from './alumnos.controller';
import { AlumnosService } from './alumnos.service';
import { alumonDto } from 'src/dto/alumno.dto';
import { Response } from 'express';

@Module({
  controllers: [AlumnosController],
  providers: [AlumnosService]
})
export class AlumnosModule {

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
