import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwtConstants';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.Secret
    })
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService, PrismaService]
})
export class UsuariosModule {}
