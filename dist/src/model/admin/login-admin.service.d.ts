import { CreateLoginAdminDto } from './dto/create-login-admin.dto';
import { JwtService } from '@nestjs/jwt';
import { SendEmailService } from 'src/common/sendEmail/mail.service';
export declare class LoginAdminService {
    private readonly jwtService;
    private readonly SendEmailService;
    constructor(jwtService: JwtService, SendEmailService: SendEmailService);
    create(createLoginAdminDto: CreateLoginAdminDto): {
        message: string;
        token: string;
    };
    sendPassword(): {
        message: string;
        password: string | undefined;
    };
}
