import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
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
  
    @Put(':id')
    updateAsistencia(@Param('id') id:string, @Body() asistencia:asistenciaDto,@Res() response:Response) {
      return this.service.alterAsistencia(id, asistencia, response);
    }

    @Get(':id') 
    getAllAsistenciasForSala(@Param('id') id:string, @Res() response:Response) {
      return this.service.getAsistenciaForSala(id,response)
    }
}
