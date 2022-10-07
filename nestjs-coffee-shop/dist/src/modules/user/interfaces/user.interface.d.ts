/// <reference types="node" />
import { UserRole } from '../enums/user-role.enum';
import { Base } from '@base/base.interface';
import { UserProvider } from '@modules/user/enums/user-provider.enum';
export interface IUser extends Base {
    username: string;
    password: string;
    name?: string;
    avatar?: string;
    email: string;
    salt: Buffer;
    role: UserRole;
    provider: UserProvider;
    providerId?: string;
}
