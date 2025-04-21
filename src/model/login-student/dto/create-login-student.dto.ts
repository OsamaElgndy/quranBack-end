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
}