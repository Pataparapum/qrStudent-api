import { Body, Delete, Get, Module, Param, Post, Put, Res } from '@nestjs/common';
import { SalasService } from './salas.service';
import { SalasController } from './salas.controller';
import { salaDto } from 'src/dto/sala.dto';
import { response, Response } from 'express';

@Module({
  providers: [SalasService],
  controllers: [SalasController]
})
export class SalasModule {

  constructor(private service:SalasService) {}

  @Post()
  addSala(@Body() sala:salaDto, @Res() response:Response){
    return this.service.createSala(sala, response);
  }

  @Delete(':id')
  deleteSala(@Param('id') salaId:string, @Res() response:Response) {
    return this.service.deleteSala(salaId, response);
  }

  @Put()
  updateSala(@Body() sala:salaDto, @Res() response:Response) {
    return this.service.updateSala(sala, response);
  }

  @Get()
  getAllSala(@Res() response:Response){
    return this.service.getAllSala(response);
  }

  @Get(':id')
  getSalaFororId(@Param('id') salaId:string, response:Response) {
    return this.service.getSala(salaId, response);
  }
}
