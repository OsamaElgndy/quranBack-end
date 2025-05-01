import { CreateStudentDto, FindAllStudentsDto, UpdateStudentDto } from './dto/create-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class LoginStudentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly spreadsheetId;
    private readonly auth;
    private getClient;
    findAll(skip?: number, take?: number, levelQuran?: FindAllStudentsDto): Promise<{
        students: ({
            teacher: {
                name: string;
                id: number;
            } | null;
        } & {
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
        })[];
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
        isActive: boolean;
        id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
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
            isActive: boolean;
            id: number;
            CreatedAt: Date;
            UpdatedAt: Date;
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
            isActive: boolean;
            id: number;
            CreatedAt: Date;
            UpdatedAt: Date;
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
        isActive: boolean;
        id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
    } | null>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<{
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
        isActive: boolean;
        id: number;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
}
