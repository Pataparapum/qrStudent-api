import { Body, Controller, Get, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { Response } from 'express';
import { asistenciaDto } from '../dto/asistencia.dto';
import { logginGuard } from '../guards/login.guard';

@Controller('asistencia')
@UseGuards(logginGuard)
export class AsistenciaController {
    
    constructor(private service:AsistenciaService){}

    @Post(':curso')
    markAsistencia(@Param('curso') curso:string, @Body() asistencia:asistenciaDto, @Res() response:Response){
      return this.service.addAsistencia(asistencia, curso, response);
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
