import { Module } from '@nestjs/common';
import { LoginStudentModule } from './model/student/login-student.module';
import { LoginAdminModule } from './model/admin/login-admin.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TeatcherModule } from './model/teatcher/teatcher.module';

@Module({
  imports: [LoginStudentModule, LoginAdminModule, TeatcherModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}