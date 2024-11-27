"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const hash = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
let UsuariosService = class UsuariosService {
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    getUserWithEmail(correo) {
        return this.prisma.user.findUnique({
            where: {
                email: correo,
            }
        });
    }
    async resgisterUser(newUser, response) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: newUser.email
            }
        });
        if (user) {
            return response.status(500).json({ status: 500, error: 'Error, el usuario ya existe' });
        }
        newUser.password = await hash.hash(newUser.password, 10);
        await this.prisma.user.create({ data: newUser }).catch((err) => {
            return response.json({ err });
        });
        return response.status(200).json({ status: 200, message: 'Usuario creado con exito' });
    }
    async deleteUser(correo, response) {
        await this.prisma.user.delete({
            where: {
                email: correo,
            }
        }).catch((err) => {
            return response.json({ err });
        });
        return response.json({ status: 200 });
    }
    async login(logInfo, response) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: logInfo.email
            }
        });
        const isMatch = hash.compareSync(logInfo.password, user.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException({ message: "contraseña o email incorrectos" });
        }
        const payload = { sub: user.id, username: user.username };
        response.cookie('payload', payload);
        const token = await this.jwt.signAsync(payload);
        return response.setHeader('x-access-token', `Bearer ${token}`)
            .json({ token });
    }
    async logout(req, response) {
        try {
            const cookies = req.cookies['payload'];
            const authHeader = req.headers['authorization'];
            if (!authHeader)
                return response.sendStatus(204);
            if (!cookies)
                return response.json(204);
            response.clearCookie('payload');
            response.removeHeader('authorization');
            return response.json({ status: 200, message: 'Sesion cerrada con exito' });
        }
        catch (err) {
            return response.json({ status: 500, error: "internal server error" });
        }
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map