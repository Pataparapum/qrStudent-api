import { Module } from '@nestjs/common';
import { AsistenciaController } from './asistencia.controller';
import { AsistenciaService } from './asistencia.service';
import { AlumnosService } from 'src/alumnos/alumnos.service';

@Module({
  controllers: [AsistenciaController],
  providers: [AsistenciaService, AlumnosService]
})
export class AsistenciaModule {}
