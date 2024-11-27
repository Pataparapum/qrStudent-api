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
exports.AsistenciaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AsistenciaService = class AsistenciaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addAsistencia(info, response) {
        const { salaId, alumnoId, asistencia, justificado } = info;
        const data = await this.prisma.alumnos.findUnique({
            where: {
                id: alumnoId
            }
        });
        if (data) {
            const asistenciaData = {
                date: new Date(),
                alumnoId: data.id,
                salaId,
                asistencia,
                justificado
            };
            await this.prisma.asistencia.create({ data: asistenciaData }).catch((err) => {
                return response.json({ err });
            });
            return response.json({ status: 201 });
        }
    }
    async alterAsistencia(id, data, response) {
        const justificado = await this.prisma.asistencia.findUnique({
            where: {
                id: id,
            },
            select: {
                asistencia: true
            }
        });
        if (justificado.asistencia) {
            await this.prisma.asistencia.update({
                where: {
                    id: id
                },
                data: {
                    asistencia: data.asistencia,
                }
            }).catch((err) => {
                return response.json({ err });
            });
        }
        else {
            await this.prisma.asistencia.update({
                where: {
                    id: id
                },
                data: {
                    asistencia: data.asistencia,
                    justificado: data.justificado
                }
            }).catch((err) => {
                return response.json({ err });
            });
        }
        return response.json({ status: 200 });
    }
    async getAsistenciaForSala(id, response) {
        const data = await this.prisma.asistencia.findMany({
            where: {
                salaId: id
            }
        });
        if (data) {
            return response.json({ status: 200, data });
        }
        else
            return response.json({ error: "no hay asistencias asociadas a la sala" });
    }
};
exports.AsistenciaService = AsistenciaService;
exports.AsistenciaService = AsistenciaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AsistenciaService);
//# sourceMappingURL=asistencia.service.js.map