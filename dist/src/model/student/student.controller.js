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
exports.LoginStudentController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const create_student_dto_1 = require("./dto/create-student.dto");
const common_2 = require("@nestjs/common");
let LoginStudentController = class LoginStudentController {
    loginStudentService;
    constructor(loginStudentService) {
        this.loginStudentService = loginStudentService;
    }
    print(query) {
        return this.loginStudentService.print(query);
    }
    findAll(query) {
        const { skip = 0, take = 10, ...levelQuran } = query;
        return this.loginStudentService.findAll(+skip, +take, levelQuran);
    }
    findAllisActive(skip = 0, take = 10) {
        return this.loginStudentService.findAllisActive(skip, take);
    }
    findAllisNotActive(skip = 0, take = 10) {
        return this.loginStudentService.findAllisNotActive(skip, take);
    }
    change(id) {
        return this.loginStudentService.change(id);
    }
    findOne(id) {
        return this.loginStudentService.findOne(id);
    }
    update(id, updateStudentDto) {
        return this.loginStudentService.update(id, updateStudentDto);
    }
    create(CreateStudentDto) {
        return this.loginStudentService.create(CreateStudentDto);
    }
};
exports.LoginStudentController = LoginStudentController;
__decorate([
    (0, common_1.Get)("print"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.findAlllevelQuranDto]),
    __metadata("design:returntype", void 0)
], LoginStudentController.prototype, "print", null);
__decorate([
    (0, common_1.Get)('findAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.FindAllStudentsDto]),
    __metadata("design:returntype", void 0)
], LoginStudentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("isActive"),
    __param(0, (0, common_1.Query)('skip', common_2.ParseIntPipe)),
    __param(1, (0, common_1.Query)('take', common_2.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], LoginStudentController.prototype, "findAllisActive", null);
__decorate([
    (0, common_1.Get)("isNotActive"),
    __param(0, (0, common_1.Query)('skip', common_2.ParseIntPipe)),
    __param(1, (0, common_1.Query)('take', common_2.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], LoginStudentController.prototype, "findAllisNotActive", null);
__decorate([
    (0, common_1.Patch)('change/:id'),
    __param(0, (0, common_1.Param)("id", common_2.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LoginStudentController.prototype, "change", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_2.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LoginStudentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id", common_2.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", void 0)
], LoginStudentController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", void 0)
], LoginStudentController.prototype, "create", null);
exports.LoginStudentController = LoginStudentController = __decorate([
    (0, common_1.Controller)('login-student'),
    __metadata("design:paramtypes", [student_service_1.LoginStudentService])
], LoginStudentController);
//# sourceMappingURL=student.controller.js.map