import { CreateStudentDto, findAlllevelQuranDto, FindAllStudentsDto, UpdateStudentDto } from './dto/create-student.dto';
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
            isActive: boolean;
            teacherId: number | null;
            CreatedAt: Date;
            UpdatedAt: Date;
            id: number;
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
        isActive: boolean;
        teacherId: number | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        id: number;
    }>;
    findAllisActive(skip?: number, take?: number): Promise<{
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
            isActive: boolean;
            teacherId: number | null;
            CreatedAt: Date;
            UpdatedAt: Date;
            id: number;
        })[];
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
            isActive: boolean;
            teacherId: number | null;
            CreatedAt: Date;
            UpdatedAt: Date;
            id: number;
        }[];
        total: number;
    }>;
    findOne(id: number): Promise<{
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
        isActive: boolean;
        teacherId: number | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        id: number;
    }>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<{
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
    }>;
    change(id: number): Promise<{
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
    }>;
    print(query: findAlllevelQuranDto): Promise<({
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
        isActive: boolean;
        teacherId: number | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        id: number;
    })[]>;
}
