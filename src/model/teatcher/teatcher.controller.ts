import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeatcherService } from './teatcher.service';
import { CreateTeatcherDto } from './dto/create-teatcher.dto';
import { UpdateTeatcherDto } from './dto/update-teatcher.dto';

@Controller('teatcher')
export class TeatcherController {
  constructor(private readonly teatcherService: TeatcherService) {}


  @Get()
  findAll() {
    return this.teatcherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teatcherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeatcherDto: UpdateTeatcherDto) {
    return this.teatcherService.update(+id, updateTeatcherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teatcherService.remove(+id);
  }
}
