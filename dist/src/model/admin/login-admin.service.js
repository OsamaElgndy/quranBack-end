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
exports.LoginAdminService = void 0;
const common_1 = require("@nestjs/common");
const variables_service_1 = require("../../common/constants/variables.service");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../../common/sendEmail/mail.service");
let LoginAdminService = class LoginAdminService {
    jwtService;
    SendEmailService;
    constructor(jwtService, SendEmailService) {
        this.jwtService = jwtService;
        this.SendEmailService = SendEmailService;
    }
    create(createLoginAdminDto) {
        const { phone, password } = createLoginAdminDto;
        if (phone != variables_service_1.envVariables?.SECRETPHONE || password != variables_service_1.envVariables?.SECRETPASSWORD) {
            throw new common_1.HttpException('رقم الهاتف أو كلمة المرور غير صحيحة', 401);
        }
        const token = this.jwtService.sign({ phone });
        return { message: 'تم تسجيل الدخول بنجاح', token };
    }
    sendPassword() {
        console.log("now send email to prvider ");
        const { SECRETPASSWORD, SECRETPHONE } = variables_service_1.envVariables;
        this.SendEmailService.main({ phone: SECRETPHONE, password: SECRETPASSWORD });
        return { message: 'تم ارسال كلمة المرور بنجاح', password: SECRETPASSWORD };
    }
};
exports.LoginAdminService = LoginAdminService;
exports.LoginAdminService = LoginAdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService, mail_service_1.SendEmailService])
], LoginAdminService);
//# sourceMappingURL=login-admin.service.js.map