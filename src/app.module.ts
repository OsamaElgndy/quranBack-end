import { Module } from '@nestjs/common';
import { LoginStudentModule } from './model/login-student/login-student.module';

@Module({
  imports: [LoginStudentModule],
  controllers: [],
  providers: [], 
  exports: [],  
})
export class AppModule {}