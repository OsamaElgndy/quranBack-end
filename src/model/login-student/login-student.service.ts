import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-login-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpException } from '@nestjs/common';
@Injectable()
export class LoginStudentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({
      data: createStudentDto
    });
  }


  async findAll() {
    return this.prisma.student.findMany();
  } 
  async findOne(id: number) {
   
    // Check if the student exists
    const student = await this.prisma.student.findUnique({
      where: { id },
    });

    if (!student) {
      throw new HttpException('لم يتم العثور على الطالب', 404);
    }
    return this.prisma.student.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateStudentDto: CreateStudentDto) {
    // Check if the student exists
    const student = await this.prisma.student.findUnique({
      where: { id },
    });

    if (!student) {
      throw new HttpException('لم يتم العثور على الطالب', 404);
    }
    return this.prisma.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }


  

}
