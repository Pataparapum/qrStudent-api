import { Module } from '@nestjs/common';
import { SalasService } from './salas.service';
import { SalasController } from './salas.controller';
import { PrismaService } from '../prisma/prisma.service';


@Module({
  providers: [SalasService, PrismaService],
  controllers: [SalasController]
})
export class SalasModule {}
