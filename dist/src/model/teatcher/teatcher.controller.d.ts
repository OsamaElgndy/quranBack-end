import { TeatcherService } from './teatcher.service';
export declare class TeatcherController {
    private readonly teatcherService;
    constructor(teatcherService: TeatcherService);
    findByName(): Promise<{
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__TeacherClient<({
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
