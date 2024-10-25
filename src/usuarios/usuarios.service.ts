import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class UsuariosService {

    usuarioArray = []

    resgisterUser(nombre:string, password:string, response:Response) {
        let user = {
            nombre: nombre,
            password: password
        }
        this.usuarioArray.push(user);
        response.send({status:200, message:'usuario ingresado'})
    }

    obtenerUsuarios(response:Response) {
        return this.usuarioArray;
    }
}
