
import { Controller,  Post, Body, Get, ValidationPipe, UsePipes } from '@nestjs/common';
import { LoginStudentService } from './login-student.service';
import { CreateStudentDto } from './dto/create-login-student.dto';

@Controller('login-student')
export class LoginStudentController {
  constructor(private readonly loginStudentService: LoginStudentService ) {}
 
  @Get()
  findAll() {
    return this.loginStudentService.findAll();
  }


  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() CreateStudentDto: CreateStudentDto) {
    return this.loginStudentService.create(CreateStudentDto);
  }



}
