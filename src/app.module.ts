import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma/prisma.service';
import { SalasModule } from './salas/salas.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AsistenciaModule } from './asistencia/asistencia.module';


@Module({
  imports: [UsuariosModule,
            SalasModule,
            AlumnosModule,
            AsistenciaModule,
          ],
  providers: [PrismaService],
})
export class AppModule {}
