import { UpdateTeatcherDto } from './dto/update-teatcher.dto';
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
            teacherId: number | null;
            isActive: boolean;
            id: number;
            CreatedAt: Date;
            UpdatedAt: Date;
        }[];
    } & {
        name: string;
        id: number;
    })[]>;
    findOne(id: number): string;
    update(id: number, updateTeatcherDto: UpdateTeatcherDto): string;
    remove(id: number): string;
}
