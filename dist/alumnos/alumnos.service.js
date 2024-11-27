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
exports.AlumnosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AlumnosService = class AlumnosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addEstudent(correo, alumno, response) {
        const usuario = await this.prisma.user.findUnique({
            where: {
                email: correo
            }
        });
        if (usuario.email) {
            alumno.userId = usuario.id;
            await this.prisma.alumnos.create({ data: alumno }).catch((err) => {
                return response.json({ err });
            });
            return response.json({ status: 201 });
        }
        else
            return response.json({ error: "el usuarios no existe" });
    }
    async updateEstudent(id, alumno, response) {
        await this.prisma.alumnos.update({
            where: {
                id: id
            },
            data: {
                full_name: alumno.full_name
            }
        }).catch((err) => {
            return response.json({ err });
        });
        return response.json({ status: 200 });
    }
    async deleteEstudent(alumnoId, response) {
        await this.prisma.alumnos.delete({
            where: {
                id: alumnoId
            }
        }).catch((err) => {
            return response.json({ err });
        });
        return response.json({ status: 200 });
    }
    async getAlumnoForId(alumnoId, response) {
        const data = await this.prisma.alumnos.findUnique({
            where: {
                id: alumnoId
            }
        }).catch((err) => {
            return response.json({ err });
        });
        return response.json({ data });
    }
    async getAlumnos(response) {
        const data = await this.prisma.alumnos.findMany().catch((err) => {
            return response.json({ err });
        });
        return response.json({ data });
    }
    async getAllAlumnoData(id, response) {
        const data = await this.prisma.alumnos.findUnique({
            where: {
                id: id
            },
            select: {
                full_name: true,
                salas: {
                    select: {
                        curso: true,
                        asistencia: {
                            select: {
                                date: true,
                                asistencia: true,
                                justificado: true
                            },
                        },
                    },
                },
            },
        });
        if (data) {
            return response.json({ status: 200, data });
        }
        else
            return response.json({ error: "alumno no encontrado" });
    }
};
exports.AlumnosService = AlumnosService;
exports.AlumnosService = AlumnosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AlumnosService);
//# sourceMappingURL=alumnos.service.js.map