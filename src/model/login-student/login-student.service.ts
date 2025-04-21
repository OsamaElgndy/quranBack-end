<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-login-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoginStudentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({
      data: createStudentDto
    });
  }
}
=======
import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-login-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoginStudentService {

  constructor(private readonly prisma: PrismaService) {}
  async create(createStudentDto: CreateStudentDto) {
    return await this.prisma.student.create({
      data: createStudentDto,
    });
  }

}
>>>>>>> f9551bc4b50a955ffca4f5c268599bb9aa385532
