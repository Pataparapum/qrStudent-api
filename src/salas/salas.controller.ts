import { Body, Delete, Get, Controller, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { SalasService } from './salas.service';
import { salaDto } from 'src/dto/sala.dto';
import { Response } from 'express';
import { logginGuard } from 'src/guards/login.guard';

@Controller('salas')
@UseGuards(logginGuard)
export class SalasController {
    
  constructor(private service:SalasService) {}

  @Post()
  addSala(@Body() sala:salaDto, @Res() response:Response){
    return this.service.createSala(sala, response);
  }

  @Delete(':id')
  deleteSala(@Param('id') salaId:string, @Res() response:Response) {
    return this.service.deleteSala(salaId, response);
  }

  @Put(':id')
  updateSala(@Param('id') id:string, @Body() sala:salaDto, @Res() response:Response) {
    return this.service.updateSala(id, sala, response);
  }

  @Get()
  getAllSala(@Res() response:Response){
    return this.service.getAllSala(response);
  }

  @Get(':id')
  getSalaFororId(@Param('id') salaId:string,@Res() response:Response) {
    return this.service.getSala(salaId, response);
  }

  @Get('cursos/:curso')
  getAlumnoForCurso(@Param('curso') curso:string, @Res() response:Response) {
    return this.service.getAlumnoOfCurso(curso, response);
  }

  @Get('asistencia/:curso')
  getAsistenciaForCurso(@Param('curso') curso:string, @Res() response:Response) {
    return this.service.getAsistenciaForCurso(curso, response);
  }
}
