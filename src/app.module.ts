import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UsuariosModule],
  providers: [PrismaService],
})
export class AppModule {}
