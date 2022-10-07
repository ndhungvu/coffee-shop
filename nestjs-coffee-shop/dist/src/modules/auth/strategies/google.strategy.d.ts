import { AuthService } from '../auth.service';
import { LoginDto } from '../dtos/login.dto';
declare const GoogleStrategy_base: new (...args: any[]) => any;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(request: any, accessToken: string, refreshToken: string, profile: any): Promise<LoginDto>;
}
export {};
