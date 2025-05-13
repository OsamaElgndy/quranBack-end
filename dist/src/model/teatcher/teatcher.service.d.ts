import { UpdateTeatcherDto } from './dto/update-teatcher.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TeatcherService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findName(): Promise<{
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TeacherClient<({
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
    update(id: number, updateTeatcherDto: UpdateTeatcherDto): string;
    remove(id: number): string;
}
