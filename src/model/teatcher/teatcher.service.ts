import { HttpException, Injectable } from '@nestjs/common';
import { UpdateTeatcherDto } from './dto/update-teatcher.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class TeatcherService {
  constructor(private readonly prisma: PrismaService) {}


async findName() {

  const teatchers = await this.prisma.teacher.findMany({

    select: {
     id: true,
     name: true,
    },
  });
  return teatchers;
}


  async findAll() {
    const teatchers = await this.prisma.teacher.findMany({
      include: {
       students: true
      },
    });
    return teatchers;
  }

  findOne(id: number) {
    
    const teatcher = this.prisma.teacher.findUnique({
      where: { id },
      include: { students: true }
    });
    if(!teatcher) throw new HttpException('لم يتم العثور على المعلم', 404);
    return teatcher;
    
    
  }

  
}
