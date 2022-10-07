import { Base } from '@base/base.entity';
export declare class User extends Base {
    username: string;
    password: string;
    name: string;
    avatar: string;
    email: string;
    salt: string;
    role: string;
    provider: string;
    providerId: string;
    hashPassword(): Promise<void>;
}
