"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosModule = void 0;
const common_1 = require("@nestjs/common");
const alumnos_controller_1 = require("./alumnos.controller");
const alumnos_service_1 = require("./alumnos.service");
const prisma_service_1 = require("../prisma/prisma.service");
let AlumnosModule = class AlumnosModule {
};
exports.AlumnosModule = AlumnosModule;
exports.AlumnosModule = AlumnosModule = __decorate([
    (0, common_1.Module)({
        controllers: [alumnos_controller_1.AlumnosController],
        providers: [alumnos_service_1.AlumnosService, prisma_service_1.PrismaService]
    })
], AlumnosModule);
//# sourceMappingURL=alumnos.module.js.map