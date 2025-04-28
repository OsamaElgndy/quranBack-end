import { LoginStudentService } from './login-student.service';
import { CreateStudentDto, FindAllStudentsDto } from './dto/create-login-student.dto';
export declare class LoginStudentController {
    private readonly loginStudentService;
    constructor(loginStudentService: LoginStudentService);
    findAll(query: FindAllStudentsDto): Promise<{
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
    create(CreateStudentDto: CreateStudentDto): Promise<{
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
