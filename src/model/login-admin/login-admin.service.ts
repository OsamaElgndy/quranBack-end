import { HttpException, Injectable } from '@nestjs/common';
import { CreateLoginAdminDto } from './dto/create-login-admin.dto';
import { envVariables } from 'src/common/constants/variables.service';
import { JwtService } from '@nestjs/jwt'
@Injectable()
export class LoginAdminService {
  constructor(private readonly jwtService: JwtService) {}
  create(createLoginAdminDto: CreateLoginAdminDto) {
    const { phone, password } = createLoginAdminDto;
       
    if (phone != envVariables?.SECRETPHONE || password != envVariables?.SECRETPASSWORD) {
      throw new HttpException('رقم الهاتف أو كلمة المرور غير صحيحة', 401);
      // new ExceptionsHandler(); throw  { message: 'رقم الهاتف أو كلمة المرور غير صحيحة'  , status: 401 };
    }
    const token = this.jwtService.sign({ phone });
    return { message: 'تم تسجيل الدخول بنجاح', token };
  }


}
