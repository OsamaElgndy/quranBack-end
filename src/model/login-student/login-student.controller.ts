
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
