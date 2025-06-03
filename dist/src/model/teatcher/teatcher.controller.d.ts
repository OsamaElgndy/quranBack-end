import { TeatcherService } from './teatcher.service';
export declare class TeatcherController {
    private readonly teatcherService;
    constructor(teatcherService: TeatcherService);
    findByName(): Promise<{
        id: number;
        name: string;
    }[]>;
    findAll(): Promise<({
        students: {
            id: number;
            name: string;
            age: number;
            levelQuran: string;
            address: string;
            phoneWhatsapp: string | null;
            degree: number | null;
            ranking: number | null;
            teacherId: number | null;
            CreatedAt: Date;
            UpdatedAt: Date;
            isActive: boolean;
        }[];
    } & {
        id: number;
        name: string;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__TeacherClient<({
        students: {
            id: number;
            name: string;
            age: number;
            levelQuran: string;
            address: string;
            phoneWhatsapp: string | null;
            degree: number | null;
            ranking: number | null;
            teacherId: number | null;
            CreatedAt: Date;
            UpdatedAt: Date;
            isActive: boolean;
        }[];
    } & {
        id: number;
        name: string;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
