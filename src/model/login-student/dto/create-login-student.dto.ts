<<<<<<< HEAD
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
      'المستوى الاول',
      'المستوى التاني',
      'المستوى التالت',
      'المستوى الرابع',
      'المستوى الخامس',
      'المستوى السادس',
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
=======
import {
 IsString,
 IsNotEmpty,
 IsIn,
 IsInt,
 Min,
 Max,
 Matches,
 IsEnum,
} from 'class-validator';
import { Level } from 'src/common/enum/enum.service';
export class CreateStudentDto {
 @IsString()
 @IsNotEmpty({ message: 'الاسم مطلوب' })
 name: string;

 @IsInt({ message: 'السن يجب أن يكون رقم صحيح' })
 @Min(5, { message: 'السن يجب ألا يقل عن 5 سنوات' })
 @Max(19, { message: 'السن يجب ألا يزيد عن 19 سنة' })
 age: number;

 @IsEnum(Level, { message: 'اختر المستوي صحيحة من القرآن الكريم'  })
 quranLevel: Level;

 @Matches(/^\d{11}$/, {
   message: 'رقم الهاتف يجب أن يتكون من 11 رقم',
 })
 phone: string;

 @IsIn(['دلبشان', 'خارج القرية'], {
   message: 'القرية يجب أن تكون دلبشان أو خارج القرية',
 })
 village: string;
>>>>>>> f9551bc4b50a955ffca4f5c268599bb9aa385532
}