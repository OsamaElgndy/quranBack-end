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
exports.LoginAdminController = void 0;
const common_1 = require("@nestjs/common");
const login_admin_service_1 = require("./login-admin.service");
const create_login_admin_dto_1 = require("./dto/create-login-admin.dto");
let LoginAdminController = class LoginAdminController {
    loginAdminService;
    constructor(loginAdminService) {
        this.loginAdminService = loginAdminService;
    }
    create(createLoginAdminDto) {
        return this.loginAdminService.create(createLoginAdminDto);
    }
    SendPassword() {
        return this.loginAdminService.sendPassword();
    }
};
exports.LoginAdminController = LoginAdminController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_login_admin_dto_1.CreateLoginAdminDto]),
    __metadata("design:returntype", void 0)
], LoginAdminController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("send-password"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoginAdminController.prototype, "SendPassword", null);
exports.LoginAdminController = LoginAdminController = __decorate([
    (0, common_1.Controller)('login-admin'),
    __metadata("design:paramtypes", [login_admin_service_1.LoginAdminService])
], LoginAdminController);
//# sourceMappingURL=login-admin.controller.js.map