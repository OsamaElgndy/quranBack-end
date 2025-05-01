import { Module } from '@nestjs/common';
import {LoginStudentService  } from './student.service';
import { LoginStudentController } from './student.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LoginStudentController],
  providers: [LoginStudentService  , PrismaService],
})
export class LoginStudentModule {}
