import { Module } from '@nestjs/common';
import { AsistenciaController } from './asistencia.controller';
import { AsistenciaService } from './asistencia.service';
import { AlumnosService } from 'src/alumnos/alumnos.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AsistenciaController],
  providers: [AsistenciaService, PrismaService]
})
export class AsistenciaModule {}
