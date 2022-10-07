import { OrderInputDto } from './dtos/order-input.dto';
import { IOrder } from './interfaces/order.interface';
import { IResponseGetList } from '@base/response-get-list.interface';
import { IUser } from '@modules/user/interfaces/user.interface';
export declare class OrderController {
    private service;
    constructor(service: any);
    getList(queryObj: IOrder): Promise<IResponseGetList<IOrder>>;
    getById(id: IOrder['id']): Promise<IOrder>;
    create(user: IUser, orderInput: OrderInputDto): Promise<IOrder>;
    update(user: IUser, id: IOrder['id'], orderInput: OrderInputDto): Promise<IOrder>;
    patch(user: IUser, id: IOrder['id'], orderInput: Partial<OrderInputDto>): Promise<IOrder>;
    delete(id: IOrder['id']): any;
}
