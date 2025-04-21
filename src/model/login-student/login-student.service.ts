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
