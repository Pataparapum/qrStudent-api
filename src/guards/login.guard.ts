import { Secret } from './../../node_modules/@types/jsonwebtoken/index.d';
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { Observable } from "rxjs";
import { jwtConstants } from 'src/usuarios/jwtConstants';

@Injectable()
export class logginGuard implements CanActivate {

    constructor(private jwt:JwtService){}
    
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request:Request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if (!token) {
            throw new UnauthorizedException();
        } 

        try {
            const payload = await this.jwt.verifyAsync(
                token,
                {
                    secret: jwtConstants.Secret
                }
            )
            request['user'] = payload
        } catch {
            throw new UnauthorizedException();
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token ] = request.headers.authorization?.split(' ') ?? [];
        return type == 'Bearer' ? token :undefined;
    }


}