import { PrismaService } from 'src/prisma/prisma.service';
export declare class TeatcherService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findName(): Promise<{
        name: string;
        id: number;
    }[]>;
    findAll(): Promise<({
        students: {
            name: string;
            age: number;
            levelQuran: string;
            phoneWhatsapp: string | null;
            address: string;
            degree: number | null;
            ranking: number | null;
            isActive: boolean;
            teacherId: number | null;
            CreatedAt: Date;
            UpdatedAt: Date;
            id: number;
        }[];
    } & {
        name: string;
        id: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TeacherClient<({
        students: {
            name: string;
            age: number;
            levelQuran: string;
            phoneWhatsapp: string | null;
            address: string;
            degree: number | null;
            ranking: number | null;
            isActive: boolean;
            teacherId: number | null;
            CreatedAt: Date;
            UpdatedAt: Date;
            id: number;
        }[];
    } & {
        name: string;
        id: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
