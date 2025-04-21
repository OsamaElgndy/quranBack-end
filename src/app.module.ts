<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { LoginStudentModule } from './model/login-student/login-student.module';

@Module({
  imports: [LoginStudentModule],
  controllers: [],
  providers: [], 
  exports: [],  
})
=======
import { Module } from '@nestjs/common';
import { LoginStudentModule } from './model/login-student/login-student.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [LoginStudentModule],
  controllers: [],
  providers: [PrismaService], 
  exports: [PrismaService],  
})
>>>>>>> f9551bc4b50a955ffca4f5c268599bb9aa385532
export class AppModule {}