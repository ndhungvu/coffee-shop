import { IOrder } from '../interfaces/order.interface';
export declare class OrderInputDto implements Partial<IOrder> {
    couponId: IOrder['couponId'];
    details: IOrder['details'];
}
