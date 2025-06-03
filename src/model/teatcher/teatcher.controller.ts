import { Controller, Get, Param} from '@nestjs/common';
import { TeatcherService } from './teatcher.service';

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
