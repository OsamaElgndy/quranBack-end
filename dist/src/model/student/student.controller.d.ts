import { LoginStudentService } from './student.service';
import { CreateStudentDto, findAlllevelQuranDto, FindAllStudentsDto, UpdateStudentDto } from './dto/create-student.dto';
export declare class LoginStudentController {
    private readonly loginStudentService;
    constructor(loginStudentService: LoginStudentService);
    print(query: findAlllevelQuranDto): Promise<({
        teacher: {
            id: number;
            name: string;
        } | null;
    } & {
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
    })[]>;
    findAll(query: FindAllStudentsDto): Promise<{
        students: ({
            teacher: {
                id: number;
                name: string;
            } | null;
        } & {
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
        })[];
        total: number;
    }>;
    findAllisActive(skip?: number, take?: number): Promise<{
        students: ({
            teacher: {
                id: number;
                name: string;
            } | null;
        } & {
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
        })[];
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
    findOne(id: number): Promise<{
        teacher: {
            id: number;
            name: string;
        } | null;
    } & {
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
    create(CreateStudentDto: CreateStudentDto): Promise<{
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
