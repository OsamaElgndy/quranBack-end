
import {Req, Param, Controller,  Post, Body, Get, ValidationPipe, UsePipes, Patch, Query } from '@nestjs/common';
import { LoginStudentService } from './login-student.service';
import { CreateStudentDto } from './dto/create-login-student.dto';
import { ParseIntPipe } from '@nestjs/common';
@Controller('login-student')
export class LoginStudentController {
  constructor(private readonly loginStudentService: LoginStudentService ) {}
 


  @Get("isActive")
  findAllisActive(@Query("skip") skip: number = 0, @Query("take") take: number = 10) {
    return this.loginStudentService.findAllisActive(skip, take);
  }


  @Get("isNotActive")
  findAllisNotActive() {
    return this.loginStudentService.findAllisNotActive();
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
