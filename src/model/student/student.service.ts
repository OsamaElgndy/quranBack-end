import { Injectable } from '@nestjs/common';
import { CreateStudentDto, FindAllStudentsDto, UpdateStudentDto } from './dto/create-student.dto'
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpException } from '@nestjs/common';
import { google } from 'googleapis';

@Injectable()
export class LoginStudentService {
  constructor(private readonly prisma: PrismaService) { }

  private readonly spreadsheetId = '1clGzE2sY07HwaX7uCufF8UDKCQTubu1DkQ4__9mCq3Y'
  private readonly auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  })



  private async getClient() {
    const client = await this.auth.getClient();
    return google.sheets({ version: 'v4', auth: client as any });
  }

  async findAll(skip: number = 0, take: number = 10, levelQuran?: FindAllStudentsDto) {
    const students = await this.prisma.student.findMany({
      where: {
        levelQuran: levelQuran?.levelQuran || undefined,
        isActive: true,

      },
      
      include: {
        teacher: {
          select: { name: true, id: true }
        }
      },
      orderBy: {
        ranking:"asc",
        degree:"desc"

      },
      skip,
      take,
    });
    const total = await this.prisma.student.count({
      where: {
        levelQuran: levelQuran?.levelQuran || undefined,
        isActive: true,
      },
  
    });
    return {
      students,
      total
    };

  }
  async create(createStudentDto: CreateStudentDto) {
    const length = await this.prisma.student.count()
    const { address, age, levelQuran, name, degree, phoneWhatsapp, ranking } = createStudentDto
    console.log('Fetching all students...');
    const sheets = await this.getClient();
    const request = {
      spreadsheetId: this.spreadsheetId,
      range: 'Sheet1!A1:F1',
      valueInputOption: 'RAW',
      resource: {
        values: [
          [length + 1, name, phoneWhatsapp, address, age, levelQuran, degree, ranking],
        ],
      },
    };
    try {
      const response = await sheets.spreadsheets.values.append(request);
    } catch (error) {
      console.error('Error appending data:', error);
    }


    return this.prisma.student.create({
      data: createStudentDto
    });
  }


  async findAllisActive(skip: number = 0, take: number = 10) {
    const students = await this.prisma.student.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        id: 'asc',
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
  async findAllisNotActive(skip: number = 0, take: number = 10) {
    const students = await this.prisma.student.findMany({
      where: {
        isActive: false,
      },
      orderBy: {
        id: 'asc',
      },
  
      skip,
      take,
    });

    const total = await this.prisma.student.count({
      where: {
        isActive: false,
      },
    });

    return {
      students,
      total
    };
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



  async update(id: number, updateStudentDto: UpdateStudentDto) {
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


  async change(id: number) {
    const student = await this.prisma.student.findUnique({ where: { id } });
    if (!student) {
      throw new HttpException('لم يتم العثور على الطالب', 404);
    }
    return this.prisma.student.update({
      where: { id },
      data: {
        isActive: !student?.isActive,
      },
    });
  }




}
