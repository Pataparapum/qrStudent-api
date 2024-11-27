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
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const usuarios_service_1 = require("./usuarios.service");
const userDto_1 = require("../dto/userDto");
const logDto_1 = require("../dto/logDto");
const login_guard_1 = require("../guards/login.guard");
let UsuariosController = class UsuariosController {
    constructor(user) {
        this.user = user;
    }
    obtenerUsuarios(correo) {
        return this.user.getUserWithEmail(correo);
    }
    agregarUsuario(user, response) {
        return this.user.resgisterUser(user, response);
    }
    login(logData, response) {
        return this.user.login(logData, response);
    }
    logout(request, response) {
        return this.user.logout(request, response);
    }
    deleteUser(correo, response) {
        return this.user.deleteUser(correo, response);
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Get)(':correo'),
    (0, common_1.UseGuards)(login_guard_1.logginGuard),
    __param(0, (0, common_1.Param)('correo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "obtenerUsuarios", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userDto_1.userDto, Object]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "agregarUsuario", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [logDto_1.logDto, Object]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(login_guard_1.logginGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "logout", null);
__decorate([
    (0, common_1.Delete)(':correo'),
    (0, common_1.UseGuards)(login_guard_1.logginGuard),
    __param(0, (0, common_1.Param)('correo')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "deleteUser", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map