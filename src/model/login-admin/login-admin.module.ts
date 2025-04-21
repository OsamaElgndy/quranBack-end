import { Module } from '@nestjs/common';
import { LoginAdminService } from './login-admin.service';
import { LoginAdminController } from './login-admin.controller';

@Module({
  controllers: [LoginAdminController],
  providers: [LoginAdminService],
})
export class LoginAdminModule {}
