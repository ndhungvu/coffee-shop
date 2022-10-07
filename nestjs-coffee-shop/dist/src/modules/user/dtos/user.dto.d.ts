import { BaseDto } from '@base/base.dto';
import { IUser } from '../interfaces/user.interface';
export declare class UserDto extends BaseDto {
    id: IUser['id'];
    username: IUser['username'];
    password: IUser['password'];
    salt: IUser['salt'];
    name: IUser['name'];
    avatar: IUser['avatar'];
    email: IUser['email'];
    role: IUser['role'];
    provider: IUser['provider'];
    providerId: IUser['providerId'];
}
