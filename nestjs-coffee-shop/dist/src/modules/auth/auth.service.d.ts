import { JwtService } from '@nestjs/jwt';
import { IUser } from '../user/interfaces/user.interface';
import { LoginDto } from './dtos/login.dto';
export declare class AuthService {
    private jwtService;
    userService: any;
    constructor(jwtService: JwtService);
    validateUser(username: IUser['username'], password: IUser['password']): Promise<IUser>;
    getSocialUser(providerId: IUser['providerId']): Promise<IUser>;
    login(user: Partial<IUser>): Promise<LoginDto>;
    signUp(user: Partial<IUser>): Promise<LoginDto>;
}
