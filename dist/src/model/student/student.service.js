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
exports.LoginStudentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const common_2 = require("@nestjs/common");
const googleapis_1 = require("googleapis");
let LoginStudentService = class LoginStudentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    spreadsheetId = '1clGzE2sY07HwaX7uCufF8UDKCQTubu1DkQ4__9mCq3Y';
    auth = new googleapis_1.google.auth.GoogleAuth({
        keyFile: 'credentials.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });
    async getClient() {
        const client = await this.auth.getClient();
        return googleapis_1.google.sheets({ version: 'v4', auth: client });
    }
    async findAll(skip = 0, take = 10, levelQuran) {
        const students = await this.prisma.student.findMany({
            where: {
                levelQuran: levelQuran?.levelQuran || undefined,
                isActive: true,
            },
            include: {
                teacher: {
                    select: { name: true, id: true }
                }
            },
            orderBy: {
                CreatedAt: 'desc',
            },
            skip,
            take,
        });
        const total = await this.prisma.student.count({
            where: {
                levelQuran: levelQuran?.levelQuran || undefined,
                isActive: true,
            },
            orderBy: {
                CreatedAt: 'desc',
            },
        });
        return {
            students,
            total
        };
    }
    async create(createStudentDto) {
        const length = await this.prisma.student.count();
        const { address, age, levelQuran, name, degree, phoneWhatsapp, ranking } = createStudentDto;
        console.log('Fetching all students...');
        const sheets = await this.getClient();
        const request = {
            spreadsheetId: this.spreadsheetId,
            range: 'Sheet1!A1:F1',
            valueInputOption: 'RAW',
            resource: {
                values: [
                    [length + 1, name, phoneWhatsapp, address, age, levelQuran, degree, ranking],
                ],
            },
        };
        try {
            const response = await sheets.spreadsheets.values.append(request);
        }
        catch (error) {
            console.error('Error appending data:', error);
        }
        return this.prisma.student.create({
            data: createStudentDto
        });
    }
    async findAllisActive(skip = 0, take = 10) {
        const students = await this.prisma.student.findMany({
            where: {
                isActive: true,
            },
            orderBy: {
                CreatedAt: 'desc',
            },
            skip,
            take,
        });
        const total = await this.prisma.student.count({
            where: {
                isActive: true,
            },
        });
        return {
            students,
            total
        };
    }
    async findAllisNotActive(skip = 0, take = 10) {
        const students = await this.prisma.student.findMany({
            where: {
                isActive: false,
            },
            orderBy: {
                CreatedAt: 'desc',
            },
            skip,
            take,
        });
        const total = await this.prisma.student.count({
            where: {
                isActive: false,
            },
        });
        return {
            students,
            total
        };
    }
    async findOne(id) {
        const student = await this.prisma.student.findUnique({
            where: { id },
        });
        if (!student) {
            throw new common_2.HttpException('لم يتم العثور على الطالب', 404);
        }
        return this.prisma.student.findUnique({
            where: { id },
        });
    }
    async update(id, updateStudentDto) {
        const student = await this.prisma.student.findUnique({
            where: { id },
        });
        if (!student) {
            throw new common_2.HttpException('لم يتم العثور على الطالب', 404);
        }
        return this.prisma.student.update({
            where: { id },
            data: updateStudentDto,
        });
    }
    async change(id) {
        const student = await this.prisma.student.findUnique({ where: { id } });
        if (!student) {
            throw new common_2.HttpException('لم يتم العثور على الطالب', 404);
        }
        return this.prisma.student.update({
            where: { id },
            data: {
                isActive: !student?.isActive,
            },
        });
    }
};
exports.LoginStudentService = LoginStudentService;
exports.LoginStudentService = LoginStudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LoginStudentService);
//# sourceMappingURL=student.service.js.map