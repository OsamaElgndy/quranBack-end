import { Module } from '@nestjs/common';
import { LoginStudentModule } from './model/login-student/login-student.module';
import { LoginAdminModule } from './model/login-admin/login-admin.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [LoginStudentModule, LoginAdminModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}