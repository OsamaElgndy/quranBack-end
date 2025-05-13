export declare class TeacherDto {
    id: number;
    name: string;
}
export declare class CreateStudentDto {
    name: string;
    age: number;
    levelQuran: string;
    phoneWhatsapp?: string;
    address: string;
    degree?: number;
    ranking?: number;
    isActive?: boolean;
    teacherId?: number;
}
export declare class findAlllevelQuranDto {
    levelQuran?: string;
}
export declare class FindAllStudentsDto extends findAlllevelQuranDto {
    skip?: string;
    take?: string;
}
declare const UpdateStudentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateStudentDto>>;
export declare class UpdateStudentDto extends UpdateStudentDto_base {
    CreatedAt?: string;
    UpdatedAt?: string;
}
export {};
