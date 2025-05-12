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
exports.UpdateStudentDto = exports.FindAllStudentsDto = exports.CreateStudentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
class CreateStudentDto {
    name;
    age;
    levelQuran;
    phoneWhatsapp;
    address;
    degree;
    ranking;
    teacherId;
    CreatedAt;
    UpdatedAt;
    isActive;
}
exports.CreateStudentDto = CreateStudentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'الاسم مطلوب' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'السن يجب أن يكون رقم صحيح' }),
    (0, class_validator_1.Min)(5, { message: 'السن يجب ألا يقل عن 5 سنوات' }),
    (0, class_validator_1.Max)(19, { message: 'السن يجب ألا يزيد عن 19 سنة' }),
    __metadata("design:type", Number)
], CreateStudentDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'المستوى يجب أن يكون نص' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'المستوى مطلوب' }),
    (0, class_validator_1.IsIn)([
        'القرآن كامل ← ١٨ سنة',
        'نصف قرآن ← ١٥ سنة',
        'ربع قرآن ← ١٣ سنة',
        'خمس أجزاء ← ١١ سنة',
        'ثلاث أجزاء ← ٩ سنوات',
        'جزء النبأ ← ٧ سنوات',
    ], { message: 'اختر المستوى الصحيح من القرآن الكريم' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "levelQuran", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^\d{11}$/, {
        message: 'رقم الهاتف يجب أن يتكون من 11 رقم',
    }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "phoneWhatsapp", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'العنوان مطلوب' }),
    (0, class_validator_1.IsIn)(['دلبشان', 'خارج القرية'], {
        message: 'القرية يجب أن تكون دلبشان أو خارج القرية',
    }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateStudentDto.prototype, "degree", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateStudentDto.prototype, "ranking", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateStudentDto.prototype, "teacherId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "CreatedAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "UpdatedAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)([true, false]),
    __metadata("design:type", Boolean)
], CreateStudentDto.prototype, "isActive", void 0);
class FindAllStudentsDto {
    skip;
    take;
    levelQuran;
}
exports.FindAllStudentsDto = FindAllStudentsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllStudentsDto.prototype, "skip", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllStudentsDto.prototype, "take", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllStudentsDto.prototype, "levelQuran", void 0);
class UpdateStudentDto extends (0, mapped_types_1.PartialType)(CreateStudentDto) {
}
exports.UpdateStudentDto = UpdateStudentDto;
//# sourceMappingURL=create-student.dto.js.map