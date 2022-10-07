import { Strategy } from 'passport-jwt';
import { IUser } from '@modules/user/interfaces/user.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: Partial<IUser>): Promise<{
        id: string;
        role: import("../../user/enums/user-role.enum").UserRole;
        username: string;
    }>;
}
export {};
