import { Module } from '@nestjs/common';
import { TeatcherService } from './teatcher.service';
import { TeatcherController } from './teatcher.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TeatcherController],
  providers: [TeatcherService, PrismaService],
})
export class TeatcherModule {}
