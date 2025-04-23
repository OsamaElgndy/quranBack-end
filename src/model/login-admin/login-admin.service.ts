import { HttpException, Injectable } from '@nestjs/common';
import { CreateLoginAdminDto } from './dto/create-login-admin.dto';
import { envVariables } from 'src/common/constants/variables.service';
import { JwtService } from '@nestjs/jwt'
import { SendEmailService } from 'src/common/sendEmail/mail.service';
@Injectable()
export class LoginAdminService {
  constructor(private readonly jwtService: JwtService , private readonly SendEmailService: SendEmailService) {}
  create(createLoginAdminDto: CreateLoginAdminDto) {
    const { phone, password } = createLoginAdminDto;
       
    if (phone != envVariables?.SECRETPHONE || password != envVariables?.SECRETPASSWORD) {
      throw new HttpException('رقم الهاتف أو كلمة المرور غير صحيحة', 401);
    }
    const token = this.jwtService.sign({ phone });
    return { message: 'تم تسجيل الدخول بنجاح', token };
  }

  sendPassword() {
    const { SECRETPASSWORD  , SECRETPHONE} = envVariables; 
    this.SendEmailService.main({ phone: SECRETPHONE, password: SECRETPASSWORD } as string | any);
    return { message: 'تم ارسال كلمة المرور بنجاح', password: SECRETPASSWORD };
  }
}
