import { Injectable } from '@nestjs/common';
import { CreateLoginAdminDto } from './dto/create-login-admin.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { envVariables } from 'src/common/constants/variables.service';
@Injectable()
export class LoginAdminService {
  constructor(private readonly prisma: PrismaService) {}
  create(createLoginAdminDto: CreateLoginAdminDto) {
    const { phone, password } = createLoginAdminDto;

    if (phone == envVariables.SECRETPHONE && password == envVariables.SECRETPASSWORD) {
      throw new Error('رقم الهاتف أو كلمة المرور غير صحيحة');
    }
    const token = this.prisma.jwt.sign({ phone });
    return { message: 'تم تسجيل الدخول بنجاح', token };
  }


}
