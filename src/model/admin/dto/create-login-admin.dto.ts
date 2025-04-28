import {  IsNotEmpty  } from 'class-validator';

export class CreateLoginAdminDto {
 @IsNotEmpty({ message: 'رقم الهاتف مطلوب' })
 phone: string;

 @IsNotEmpty({ message: 'كلمة المرور مطلوبة' })
 password: string;
}
