export declare class CreateStudentDto {
    name: string;
    age: number;
    levelQuran: string;
    phoneWhatsapp?: string;
    address: string;
    degree?: number;
    ranking?: number;
    teacherId?: number;
    CreatedAt?: string;
    UpdatedAt?: string;
    isActive?: boolean;
}
export declare class FindAllStudentsDto {
    skip?: string;
    take?: string;
    levelQuran?: string;
}
declare const UpdateStudentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateStudentDto>>;
export declare class UpdateStudentDto extends UpdateStudentDto_base {
}
export {};
