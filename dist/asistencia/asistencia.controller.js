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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsistenciaController = void 0;
const common_1 = require("@nestjs/common");
const asistencia_service_1 = require("./asistencia.service");
const asistencia_dto_1 = require("../dto/asistencia.dto");
const login_guard_1 = require("../guards/login.guard");
let AsistenciaController = class AsistenciaController {
    constructor(service) {
        this.service = service;
    }
    markAsistencia(asistencia, response) {
        return this.service.addAsistencia(asistencia, response);
    }
    updateAsistencia(id, asistencia, response) {
        return this.service.alterAsistencia(id, asistencia, response);
    }
    getAllAsistenciasForSala(id, response) {
        return this.service.getAsistenciaForSala(id, response);
    }
};
exports.AsistenciaController = AsistenciaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [asistencia_dto_1.asistenciaDto, Object]),
    __metadata("design:returntype", void 0)
], AsistenciaController.prototype, "markAsistencia", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, asistencia_dto_1.asistenciaDto, Object]),
    __metadata("design:returntype", void 0)
], AsistenciaController.prototype, "updateAsistencia", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AsistenciaController.prototype, "getAllAsistenciasForSala", null);
exports.AsistenciaController = AsistenciaController = __decorate([
    (0, common_1.Controller)('asistencia'),
    (0, common_1.UseGuards)(login_guard_1.logginGuard),
    __metadata("design:paramtypes", [asistencia_service_1.AsistenciaService])
], AsistenciaController);
//# sourceMappingURL=asistencia.controller.js.map