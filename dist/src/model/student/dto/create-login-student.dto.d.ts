export declare class CreateStudentDto {
    name: string;
    age: number;
    levelQuran: string;
    phoneWhatsapp?: string;
    address: string;
    degree?: number;
    ranking?: number;
    teacherId?: number;
}
export declare class FindAllStudentsDto {
    skip?: string;
    take?: string;
    levelQuran?: string;
}
