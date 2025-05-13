import { LoginStudentService } from './student.service';
import { CreateStudentDto, findAlllevelQuranDto, FindAllStudentsDto, UpdateStudentDto } from './dto/create-student.dto';
export declare class LoginStudentController {
    private readonly loginStudentService;
    constructor(loginStudentService: LoginStudentService);
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
            isActive: boolean;
            teacherId: number | null;
            CreatedAt: Date;
            UpdatedAt: Date;
            id: number;
        })[];
        total: number;
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
    create(CreateStudentDto: CreateStudentDto): Promise<{
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
}
