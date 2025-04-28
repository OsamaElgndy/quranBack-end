import { CreateStudentDto, FindAllStudentsDto } from './dto/create-login-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class LoginStudentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly spreadsheetId;
    private readonly auth;
    private getClient;
    findAll(skip?: number, take?: number, levelQuran?: FindAllStudentsDto): Promise<{
        students: {
            name: string;
            age: number;
            levelQuran: string;
            phoneWhatsapp: string | null;
            address: string;
            degree: number | null;
            ranking: number | null;
            teacherId: number | null;
            id: number;
            CreatedAt: Date;
            UpdatedAt: Date;
            isActive: boolean;
        }[];
        total: number;
    }>;
    create(createStudentDto: CreateStudentDto): Promise<{
        name: string;
        age: number;
        levelQuran: string;
        phoneWhatsapp: string | null;
        address: string;
        degree: number | null;
        ranking: number | null;
        teacherId: number | null;
        id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        isActive: boolean;
    }>;
    findAllisActive(skip?: number, take?: number): Promise<{
        students: {
            name: string;
            age: number;
            levelQuran: string;
            phoneWhatsapp: string | null;
            address: string;
            degree: number | null;
            ranking: number | null;
            teacherId: number | null;
            id: number;
            CreatedAt: Date;
            UpdatedAt: Date;
            isActive: boolean;
        }[];
        total: number;
    }>;
    findAllisNotActive(skip?: number, take?: number): Promise<{
        students: {
            name: string;
            age: number;
            levelQuran: string;
            phoneWhatsapp: string | null;
            address: string;
            degree: number | null;
            ranking: number | null;
            teacherId: number | null;
            id: number;
            CreatedAt: Date;
            UpdatedAt: Date;
            isActive: boolean;
        }[];
        total: number;
    }>;
    findOne(id: number): Promise<{
        name: string;
        age: number;
        levelQuran: string;
        phoneWhatsapp: string | null;
        address: string;
        degree: number | null;
        ranking: number | null;
        teacherId: number | null;
        id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        isActive: boolean;
    } | null>;
    update(id: number, updateStudentDto: CreateStudentDto): Promise<{
        name: string;
        age: number;
        levelQuran: string;
        phoneWhatsapp: string | null;
        address: string;
        degree: number | null;
        ranking: number | null;
        teacherId: number | null;
        id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        isActive: boolean;
    }>;
    change(id: number): Promise<{
        name: string;
        age: number;
        levelQuran: string;
        phoneWhatsapp: string | null;
        address: string;
        degree: number | null;
        ranking: number | null;
        teacherId: number | null;
        id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
        isActive: boolean;
    }>;
}
