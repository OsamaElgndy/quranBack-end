
import {Req, Param, Controller,  Post, Body, Get, ValidationPipe, UsePipes, Patch, Query } from '@nestjs/common';
import { LoginStudentService } from './student.service';
import { CreateStudentDto ,findAlllevelQuranDto,FindAllStudentsDto, UpdateStudentDto } from './dto/create-student.dto';
import { ParseIntPipe } from '@nestjs/common';
@Controller('login-student')
export class LoginStudentController {
  constructor(private readonly loginStudentService: LoginStudentService ) {}


  @Get("print")
  print(@Query() query: findAlllevelQuranDto){
    return this.loginStudentService.print(query);
  }
  @Get('findAll')
  findAll(@Query() query: FindAllStudentsDto) {
    const { skip = 0, take = 10, ...levelQuran } = query;

    return this.loginStudentService.findAll(+skip, +take, levelQuran );
  }

  @Get("isActive")
  findAllisActive(
    @Query('skip', ParseIntPipe) skip: number = 0,
    @Query('take', ParseIntPipe) take: number = 10

  ) {
    return this.loginStudentService.findAllisActive(skip, take);
  }


  @Get("isNotActive")
  findAllisNotActive(
    @Query('skip', ParseIntPipe) skip: number = 0,
    @Query('take', ParseIntPipe) take: number = 10
  )
    {
    return this.loginStudentService.findAllisNotActive(skip , take );
  }

  @Patch('change/:id')
  change(@Param("id", ParseIntPipe) id: number) {
    return this.loginStudentService.change(id);
  }


  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.loginStudentService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() updateStudentDto: UpdateStudentDto) {
    return this.loginStudentService.update(id,updateStudentDto); 
  }

  @Post()
  create(@Body() CreateStudentDto: CreateStudentDto) {
    return this.loginStudentService.create(CreateStudentDto);
  }
  


}
