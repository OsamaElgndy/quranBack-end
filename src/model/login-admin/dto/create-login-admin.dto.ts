import { IsString, IsNotEmpty, IsPhoneNumber, MinLength } from 'class-validator';

export class CreateLoginAdminDto {
 @IsPhoneNumber(undefined, { message: 'رقم الهاتف غير صالح' })
 @IsNotEmpty({ message: 'رقم الهاتف مطلوب' })
 phone: string;

 @IsString({ message: 'كلمة المرور يجب أن تكون نصاً' })
 @IsNotEmpty({ message: 'كلمة المرور مطلوبة' })
 @MinLength(6, { message: 'كلمة المرور يجب أن تكون على الأقل 6 أحرف' })
 password: string;
}
