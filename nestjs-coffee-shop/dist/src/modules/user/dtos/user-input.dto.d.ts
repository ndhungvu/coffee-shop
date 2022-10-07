import { IUser } from '../interfaces/user.interface';
export declare class UserInputDto {
    username: IUser['username'];
    password: IUser['password'];
    name: IUser['name'];
    avatar: IUser['avatar'];
    email: IUser['email'];
    role: IUser['role'];
    provider: IUser['provider'];
    providerId: IUser['providerId'];
}
