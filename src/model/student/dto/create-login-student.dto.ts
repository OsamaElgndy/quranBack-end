import {
  IsString,
  IsNotEmpty,
  IsInt,
  Min,
  Max,
  Matches,
  IsEnum,
  IsOptional,
  IsIn,
} from 'class-validator';



export class CreateStudentDto {
  @IsString()
  @IsNotEmpty({ message: 'الاسم مطلوب' })
  name: string;

  @IsInt({ message: 'السن يجب أن يكون رقم صحيح' })
  @Min(5, { message: 'السن يجب ألا يقل عن 5 سنوات' })
  @Max(19, { message: 'السن يجب ألا يزيد عن 19 سنة' })
  age: number;

  @IsString({ message: 'المستوى يجب أن يكون نص' })
  @IsNotEmpty({ message: 'المستوى مطلوب' })
  @IsIn(
    [
      'القرآن كامل ← ١٨ سنة', 
      'نصف قرآن ← ١٥ سنة', 
      'ربع قرآن ← ١٣ سنة', 
      'خمس أجزاء ← ١١ سنة', 
      'ثلاث أجزاء ← ٩ سنوات', 
      'جزء النبأ ← ٧ سنوات',
    ],
    { message: 'اختر المستوى الصحيح من القرآن الكريم' },
  )
  levelQuran: string;

  @IsOptional()
  @Matches(/^\d{11}$/, {
    message: 'رقم الهاتف يجب أن يتكون من 11 رقم',
  })
  phoneWhatsapp?: string;

  @IsString()
  @IsNotEmpty({ message: 'العنوان مطلوب' })
  @IsIn(['دلبشان', 'خارج القرية'], {
    message: 'القرية يجب أن تكون دلبشان أو خارج القرية',
  })
  address: string;

  @IsOptional()
  @IsInt()
  degree?: number;

  @IsOptional()
  @IsInt()
  ranking?: number;

  @IsOptional()
  @IsInt()
  teacherId?: number;
}

export class FindAllStudentsDto {
  @IsOptional()
  @IsString()
  skip?: string;

  @IsOptional()
  @IsString()
  take?: string;


  @IsOptional()
  @IsString()
  levelQuran?: string;

}


