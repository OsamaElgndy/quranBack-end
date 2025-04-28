import { LoginAdminService } from './login-admin.service';
import { CreateLoginAdminDto } from './dto/create-login-admin.dto';
export declare class LoginAdminController {
    private readonly loginAdminService;
    constructor(loginAdminService: LoginAdminService);
    create(createLoginAdminDto: CreateLoginAdminDto): {
        message: string;
        token: string;
    };
    SendPassword(): {
        message: string;
        password: string | undefined;
    };
}
