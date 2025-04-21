<<<<<<< HEAD
import { Module } from '@nestjs/common';
import {LoginStudentService  } from './login-student.service';
import { LoginStudentController } from './login-student.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LoginStudentController],
  providers: [LoginStudentService  , PrismaService],
})
export class LoginStudentModule {}
=======
import { Module } from '@nestjs/common';
import { LoginStudentService } from './login-student.service';
import { LoginStudentController } from './login-student.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LoginStudentController],
  providers: [LoginStudentService ],
})
export class LoginStudentModule {}
>>>>>>> f9551bc4b50a955ffca4f5c268599bb9aa385532
