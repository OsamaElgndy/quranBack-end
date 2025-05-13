import { TeatcherService } from './teatcher.service';
import { UpdateTeatcherDto } from './dto/update-teatcher.dto';
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
            CreatedAt: Date;
            UpdatedAt: Date;
            id: number;
            teacherId: number | null;
        }[];
    } & {
        name: string;
        id: number;
    })[]>;
    findOne(id: string): string;
    update(id: string, updateTeatcherDto: UpdateTeatcherDto): string;
    remove(id: string): string;
}
