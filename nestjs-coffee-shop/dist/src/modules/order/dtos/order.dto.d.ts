import { OrderDetailDto } from '@modules/order-detail/dtos/order-detail.dto';
import { BaseDto } from '@base/base.dto';
import { IOrder } from '../interfaces/order.interface';
export declare class OrderDto extends BaseDto {
    id: IOrder['id'];
    userId: IOrder['userId'];
    couponId: IOrder['couponId'];
    detail: OrderDetailDto[];
}
