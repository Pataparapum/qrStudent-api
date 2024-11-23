import { Body, Controller, Post, Put, Res } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { Response } from 'express';
import { asistenciaDto } from 'src/dto/asistencia.dto';

@Controller('asistencia')
export class AsistenciaController {
    
    constructor(private service:AsistenciaService){}

    @Post()
    markAsistencia(@Body() asistencia:asistenciaDto, @Res() response:Response){
      return this.service.addAsistencia(asistencia, response);
    }
  
    @Put()
    updateAsistencia(@Body() asistencia:asistenciaDto, response:Response) {
      return this.service.alterAsistencia(asistencia, response);
    }
}
