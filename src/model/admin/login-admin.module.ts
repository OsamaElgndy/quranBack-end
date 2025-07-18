import { Module } from '@nestjs/common';
import { LoginAdminService } from './login-admin.service';
import { LoginAdminController } from './login-admin.controller';
import { envVariables } from 'src/common/constants/variables.service';
import { JwtModule } from '@nestjs/jwt';
import { SendEmailService } from 'src/common/sendEmail/mail.service';
@Module({
  imports: [
    JwtModule.register({
      secret: envVariables.JWT_SECRET, // Use your secret key
    }),
  ],
  controllers: [LoginAdminController],
  providers: [LoginAdminService, SendEmailService],
})
export class LoginAdminModule {}
