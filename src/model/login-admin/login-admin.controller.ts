import { Controller, Post, Body, Get } from '@nestjs/common';
import { LoginAdminService } from './login-admin.service';
import { CreateLoginAdminDto } from './dto/create-login-admin.dto';

@Controller('login-admin')
export class LoginAdminController {
  constructor(private readonly loginAdminService: LoginAdminService ) {}

  @Post()
  create(@Body() createLoginAdminDto: CreateLoginAdminDto) {
    return this.loginAdminService.create(createLoginAdminDto);
  }

  @Get("send-password")
  SendPassword() {
    return this.loginAdminService.sendPassword();
  }

  

}
