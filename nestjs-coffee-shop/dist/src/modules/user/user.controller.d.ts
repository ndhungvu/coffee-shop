import { IUser } from './interfaces/user.interface';
import { UserInputDto } from './dtos/user-input.dto';
import { IResponseGetList } from '@base/response-get-list.interface';
export declare class UserController {
    private service;
    constructor(service: any);
    getList(queryObj: IUser): Promise<IResponseGetList<IUser>>;
    getById(id: IUser['id']): Promise<IUser>;
    create(userInput: UserInputDto): Promise<IUser>;
    update(id: IUser['id'], userInput: UserInputDto): Promise<IUser>;
    patch(id: IUser['id'], userInput: UserInputDto): Promise<IUser>;
    delete(id: IUser['id']): any;
}
