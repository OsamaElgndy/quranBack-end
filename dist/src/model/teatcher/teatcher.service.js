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
exports.TeatcherService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let TeatcherService = class TeatcherService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findName() {
        const teatchers = await this.prisma.teacher.findMany({
            select: {
                id: true,
                name: true,
            },
        });
        return teatchers;
    }
    async findAll() {
        const teatchers = await this.prisma.teacher.findMany({
            include: {
                students: true
            },
        });
        return teatchers;
    }
    findOne(id) {
        const teatcher = this.prisma.teacher.findUnique({
            where: { id },
            include: { students: true }
        });
        if (!teatcher)
            throw new common_1.HttpException('لم يتم العثور على المعلم', 404);
        return teatcher;
    }
};
exports.TeatcherService = TeatcherService;
exports.TeatcherService = TeatcherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeatcherService);
//# sourceMappingURL=teatcher.service.js.map