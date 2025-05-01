"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAdminModule = void 0;
const common_1 = require("@nestjs/common");
const login_admin_service_1 = require("./login-admin.service");
const login_admin_controller_1 = require("./login-admin.controller");
const variables_service_1 = require("../../common/constants/variables.service");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../../common/sendEmail/mail.service");
let LoginAdminModule = class LoginAdminModule {
};
exports.LoginAdminModule = LoginAdminModule;
exports.LoginAdminModule = LoginAdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: variables_service_1.envVariables.JWT_SECRET,
            }),
        ],
        controllers: [login_admin_controller_1.LoginAdminController],
        providers: [login_admin_service_1.LoginAdminService, mail_service_1.SendEmailService],
    })
], LoginAdminModule);
//# sourceMappingURL=login-admin.module.js.map