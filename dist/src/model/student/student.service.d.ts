import { CreateStudentDto, FindAllStudentsDto, UpdateStudentDto } from './dto/create-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class LoginStudentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly spreadsheetId;
    private readonly auth;
    private getClient;
    findAll(skip?: number, take?: number, levelQuran?: FindAllStudentsDto): Promise<{
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
        total: number;
    }>;
    create(createStudentDto: CreateStudentDto): Promise<{
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
    }>;
    findAllisActive(skip?: number, take?: number): Promise<{
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
        total: number;
    }>;
    findAllisNotActive(skip?: number, take?: number): Promise<{
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
        total: number;
    }>;
    findOne(id: number): Promise<{
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
    } | null>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<{
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
    }>;
    change(id: number): Promise<{
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
    }>;
}
