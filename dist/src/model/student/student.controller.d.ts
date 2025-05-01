import { LoginStudentService } from './student.service';
import { CreateStudentDto, FindAllStudentsDto, UpdateStudentDto } from './dto/create-student.dto';
export declare class LoginStudentController {
    private readonly loginStudentService;
    constructor(loginStudentService: LoginStudentService);
    findAll(query: FindAllStudentsDto): Promise<{
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
    create(CreateStudentDto: CreateStudentDto): Promise<{
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
