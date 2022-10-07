import { AuthService } from './auth.service';
import { LoginInputDto } from './dtos/login-input.dto';
import { LoginDto } from './dtos/login.dto';
import { UserInputDto } from '../user/dtos/user-input.dto';
export declare class AuthController {
    private service;
    constructor(service: AuthService);
    login(req: {
        user: LoginInputDto;
    }): Promise<LoginDto>;
    signUp(createDto: UserInputDto): Promise<LoginDto>;
    googleLogin(): void;
    googleLoginCallback(req: any, res: any): void;
    facebookLogin(): void;
    facebookLoginCallback(req: any, res: any): void;
}
