import { BaseDto } from '@base/base.dto';
import { IOrderDetail } from '../interfaces/order-detail.interface';
export declare class OrderDetailDto extends BaseDto {
    id: IOrderDetail['id'];
    productId: IOrderDetail['productId'];
    price: IOrderDetail['price'];
    quantity: IOrderDetail['quantity'];
}
