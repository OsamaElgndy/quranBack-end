import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-login-student.dto'
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


  async findAllisActive(skip: number = 0, take: number = 10) {
    const students = await this.prisma.student.findMany({
      where: {
        isActive: true,
      },
      skip,  
      take,  
    });
    
    const total = await this.prisma.student.count({
      where: {
        isActive: true,
      },
    });
  
    return {
      students,
      total
    };
  }
  async findAllisNotActive() {
    return this.prisma.student.findMany(
      {
        where: {
          isActive: false,
        },
      },
    );
  } 
  async findOne(id: number) {
   
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
