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
exports.AlumnosController = void 0;
const common_1 = require("@nestjs/common");
const alumnos_service_1 = require("./alumnos.service");
const alumno_dto_1 = require("../dto/alumno.dto");
const login_guard_1 = require("../guards/login.guard");
let AlumnosController = class AlumnosController {
    constructor(service) {
        this.service = service;
    }
    addAlumno(correo, alumno, response) {
        return this.service.addEstudent(correo, alumno, response);
    }
    updateAlumno(id, alumno, response) {
        return this.service.updateEstudent(id, alumno, response);
    }
    deleteAlumno(alumnoId, response) {
        return this.service.deleteEstudent(alumnoId, response);
    }
    getAllAlumno(response) {
        return this.service.getAlumnos(response);
    }
    getAlumnoForId(alumnoId, response) {
        return this.service.getAlumnoForId(alumnoId, response);
    }
    getAlumnoInfo(id, response) {
        return this.service.getAllAlumnoData(id, response);
    }
};
exports.AlumnosController = AlumnosController;
__decorate([
    (0, common_1.Post)(':correo'),
    __param(0, (0, common_1.Param)('correo')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, alumno_dto_1.alumonDto, Object]),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "addAlumno", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, alumno_dto_1.alumonDto, Object]),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "updateAlumno", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "deleteAlumno", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "getAllAlumno", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "getAlumnoForId", null);
__decorate([
    (0, common_1.Get)('info/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "getAlumnoInfo", null);
exports.AlumnosController = AlumnosController = __decorate([
    (0, common_1.Controller)('alumnos'),
    (0, common_1.UseGuards)(login_guard_1.logginGuard),
    __metadata("design:paramtypes", [alumnos_service_1.AlumnosService])
], AlumnosController);
//# sourceMappingURL=alumnos.controller.js.map