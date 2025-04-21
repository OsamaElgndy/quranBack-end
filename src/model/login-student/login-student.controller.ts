<<<<<<< HEAD
import { Controller,  Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { LoginStudentService } from './login-student.service';
import { CreateStudentDto } from './dto/create-login-student.dto';

@Controller('login-student')
export class LoginStudentController {
  constructor(private readonly loginStudentService: LoginStudentService ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() CreateStudentDto: CreateStudentDto) {
    return this.loginStudentService.create(CreateStudentDto);
  }

}
=======
import { Controller,  Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { LoginStudentService } from './login-student.service';
import { CreateStudentDto } from './dto/create-login-student.dto';

@Controller('login-student')
export class LoginStudentController {
  constructor(private readonly loginStudentService: LoginStudentService ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() CreateStudentDto: CreateStudentDto) {
    return this.loginStudentService.create(CreateStudentDto);
  }

}
>>>>>>> f9551bc4b50a955ffca4f5c268599bb9aa385532
