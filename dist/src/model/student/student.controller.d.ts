import { LoginStudentService } from './student.service';
import { CreateStudentDto, FindAllStudentsDto, UpdateStudentDto } from './dto/create-student.dto';
export declare class LoginStudentController {
    private readonly loginStudentService;
    constructor(loginStudentService: LoginStudentService);
    findAll(query: FindAllStudentsDto): Promise<{
        students: {
            levelQuran: string;
            id: number;
            name: string;
            age: number;
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
    findAllisActive(skip?: number, take?: number): Promise<{
        students: {
            levelQuran: string;
            id: number;
            name: string;
            age: number;
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
            levelQuran: string;
            id: number;
            name: string;
            age: number;
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
    change(id: number): Promise<{
        levelQuran: string;
        id: number;
        name: string;
        age: number;
        address: string;
        phoneWhatsapp: string | null;
        degree: number | null;
        ranking: number | null;
        teacherId: number | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        isActive: boolean;
    }>;
    findOne(id: number): Promise<{
        levelQuran: string;
        id: number;
        name: string;
        age: number;
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
        levelQuran: string;
        id: number;
        name: string;
        age: number;
        address: string;
        phoneWhatsapp: string | null;
        degree: number | null;
        ranking: number | null;
        teacherId: number | null;
        CreatedAt: Date;
        UpdatedAt: Date;
        isActive: boolean;
    }>;
    create(CreateStudentDto: CreateStudentDto): Promise<{
        levelQuran: string;
        id: number;
        name: string;
        age: number;
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
