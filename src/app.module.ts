import { Module } from '@nestjs/common';
import { LoginStudentModule } from './model/login-student/login-student.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [LoginStudentModule],
  controllers: [],
  providers: [PrismaService], 
  exports: [PrismaService],  
})
export class AppModule {}