
import {Req, Param, Controller,  Post, Body, Get, ValidationPipe, UsePipes, Patch, Query } from '@nestjs/common';
import { LoginStudentService } from './login-student.service';
import { CreateStudentDto } from './dto/create-login-student.dto';
import { ParseIntPipe } from '@nestjs/common';
@Controller('login-student')
export class LoginStudentController {
  constructor(private readonly loginStudentService: LoginStudentService ) {}
 
  @Get("isActive")
  @UsePipes(new ValidationPipe())
  create(@Body() CreateStudentDto: CreateStudentDto) {
    return this.loginStudentService.create(CreateStudentDto);
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

  
}
