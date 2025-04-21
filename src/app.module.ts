import { Module } from '@nestjs/common';
import { LoginStudentModule } from './model/login-student/login-student.module';
import { LoginAdminModule } from './model/login-admin/login-admin.module';
import { LoginAdminModule } from './model/login-admin/login-admin.module';

@Module({
  imports: [LoginStudentModule, LoginAdminModule],
  controllers: [],
  providers: [], 
  exports: [],  
})
export class AppModule {}