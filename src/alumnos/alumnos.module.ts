import { Module } from '@nestjs/common';
import { AlumnosController } from './alumnos.controller';
import { AlumnosService } from './alumnos.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [AlumnosController],
  providers: [AlumnosService, PrismaService ]
})
export class AlumnosModule {}
