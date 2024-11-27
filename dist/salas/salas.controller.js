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
exports.SalasController = void 0;
const common_1 = require("@nestjs/common");
const salas_service_1 = require("./salas.service");
const sala_dto_1 = require("../dto/sala.dto");
const login_guard_1 = require("../guards/login.guard");
let SalasController = class SalasController {
    constructor(service) {
        this.service = service;
    }
    addSala(sala, response) {
        return this.service.createSala(sala, response);
    }
    deleteSala(salaId, response) {
        return this.service.deleteSala(salaId, response);
    }
    updateSala(id, sala, response) {
        return this.service.updateSala(id, sala, response);
    }
    getAllSala(response) {
        return this.service.getAllSala(response);
    }
    getSalaFororId(salaId, response) {
        return this.service.getSala(salaId, response);
    }
    getAlumnoForCurso(curso, response) {
        return this.service.getAlumnoOfCurso(curso, response);
    }
    getAsistenciaForCurso(curso, response) {
        return this.service.getAsistenciaForCurso(curso, response);
    }
};
exports.SalasController = SalasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sala_dto_1.salaDto, Object]),
    __metadata("design:returntype", void 0)
], SalasController.prototype, "addSala", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SalasController.prototype, "deleteSala", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, sala_dto_1.salaDto, Object]),
    __metadata("design:returntype", void 0)
], SalasController.prototype, "updateSala", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SalasController.prototype, "getAllSala", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SalasController.prototype, "getSalaFororId", null);
__decorate([
    (0, common_1.Get)('cursos/:curso'),
    __param(0, (0, common_1.Param)('curso')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SalasController.prototype, "getAlumnoForCurso", null);
__decorate([
    (0, common_1.Get)('asistencia/:curso'),
    __param(0, (0, common_1.Param)('curso')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SalasController.prototype, "getAsistenciaForCurso", null);
exports.SalasController = SalasController = __decorate([
    (0, common_1.Controller)('salas'),
    (0, common_1.UseGuards)(login_guard_1.logginGuard),
    __metadata("design:paramtypes", [salas_service_1.SalasService])
], SalasController);
//# sourceMappingURL=salas.controller.js.map