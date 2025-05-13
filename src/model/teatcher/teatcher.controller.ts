import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeatcherService } from './teatcher.service';
import { CreateTeatcherDto } from './dto/create-teatcher.dto';
import { UpdateTeatcherDto } from './dto/update-teatcher.dto';

@Controller('teatcher')
export class TeatcherController {
  constructor(private readonly teatcherService: TeatcherService) {}

 @Get("find-name")
  findByName() {
    return this.teatcherService.findName();
  }

  @Get()
  findAll() {
    return this.teatcherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teatcherService.findOne(+id);
  }


}
