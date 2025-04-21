import { Module } from '@nestjs/common';
import {LoginStudentService  } from './login-student.service';
import { LoginStudentController } from './login-student.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LoginStudentController],
  providers: [LoginStudentService  , PrismaService],
})
export class LoginStudentModule {}
