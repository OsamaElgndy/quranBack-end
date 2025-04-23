// src/model/login-admin/login-admin.module.ts
import { Module } from '@nestjs/common';
import { LoginAdminService } from './login-admin.service';
import { LoginAdminController } from './login-admin.controller';
import { JwtModule } from '@nestjs/jwt';
import { SendEmailService } from 'src/common/sendEmail/mail.service'; // Import SendEmailService

@Module({
  providers: [LoginAdminService, SendEmailService], // Add SendEmailService to providers
  controllers: [LoginAdminController],
  imports: [JwtModule],
})
export class LoginAdminModule {}