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
exports.SalasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SalasService = class SalasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createSala(sala, response) {
        const data = await this.prisma.salas.findFirst({
            where: {
                curso: sala.curso,
                alumnoid: sala.alumnoid
            }
        });
        if (data)
            return response.json({ error: "un alumno no puede estar registrado dos veces en la misma clase" });
        await this.prisma.salas.create({ data: sala }).catch((err) => {
            return response.json({ err });
        });
        return response.json({ status: 201 });
    }
    async deleteSala(salaId, response) {
        await this.prisma.salas.delete({
            where: {
                id: salaId
            }
        }).catch((err) => {
            return response.json({ err });
        });
        return response.json({ status: 200 });
    }
    async updateSala(id, sala, response) {
        await this.prisma.salas.update({
            where: {
                id: id
            },
            data: {
                curso: sala.curso
            }
        }).catch((err) => {
            response.json({ err });
        });
        return response.json({ status: 200 });
    }
    async getSala(salaId, response) {
        const data = await this.prisma.salas.findUnique({
            where: {
                id: salaId
            }
        }).catch((err) => {
            return response.json({ err });
        });
        return response.json({ status: 200, data });
    }
    async getAllSala(response) {
        const data = await this.prisma.salas.findMany().catch((err) => {
            return response.json({ err });
        });
        return response.json({ status: 200, data });
    }
    async getAlumnoOfCurso(curso, response) {
        const data = await this.prisma.salas.findMany({
            where: {
                curso: curso,
            },
            select: {
                curso: true,
                alumno: {
                    select: {
                        full_name: true,
                    }
                }
            }
        });
        if (data) {
            return response.json({ status: 200, data });
        }
        else
            return response.json({ error: "no hay cursos con el nombre " + curso });
    }
    async getAsistenciaForCurso(curso, response) {
        const data = await this.prisma.salas.findMany({
            where: {
                curso: curso,
            },
            select: {
                curso: true,
                asistencia: {
                    select: {
                        alumno: { select: { full_name: true } },
                        date: true,
                        asistencia: true,
                        justificado: true,
                    }
                }
            }
        });
        if (data) {
            return response.json({ status: 200, data });
        }
        else
            return response.json({ error: "no hay cursos con el nombre " + curso });
    }
};
exports.SalasService = SalasService;
exports.SalasService = SalasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SalasService);
//# sourceMappingURL=salas.service.js.map