import { IOrderDetail } from '../interfaces/order-detail.interface';
export declare class OrderDetailInputDto implements Partial<IOrderDetail> {
    productId: IOrderDetail['productId'];
    price: IOrderDetail['price'];
    quantity: IOrderDetail['quantity'];
}
