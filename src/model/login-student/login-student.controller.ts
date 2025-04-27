
import {Req, Param, Controller,  Post, Body, Get, ValidationPipe, UsePipes, Patch, Query } from '@nestjs/common';
import { LoginStudentService } from './login-student.service';
import { CreateStudentDto ,ConditionStudentDto } from './dto/create-login-student.dto';
import { ParseIntPipe } from '@nestjs/common';
@Controller('login-student')
export class LoginStudentController {
  constructor(private readonly loginStudentService: LoginStudentService ) {}


  @Get("findAll")
  
  findAll(
    @Query('skip', ParseIntPipe) skip: number = 0,
    @Query('take', ParseIntPipe) take: number = 10,
    @Query() condition: ConditionStudentDto,
  ) {
    return this.loginStudentService.findAll(skip, take, condition);
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
  @UsePipes(new ValidationPipe())
  update(@Param("id", ParseIntPipe) id: number, @Body() updateStudentDto: CreateStudentDto) {
    return this.loginStudentService.update(id, updateStudentDto);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() CreateStudentDto: CreateStudentDto) {
    return this.loginStudentService.create(CreateStudentDto);
  }
  


}
