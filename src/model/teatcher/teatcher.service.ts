import { Injectable } from '@nestjs/common';
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
    return `This action returns a #${id} teatcher`;
  }

  update(id: number, updateTeatcherDto: UpdateTeatcherDto) {
    return `This action updates a #${id} teatcher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teatcher`;
  }
}
