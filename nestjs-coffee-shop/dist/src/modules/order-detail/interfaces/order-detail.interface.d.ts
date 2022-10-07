import { Base } from '@base/base.interface';
export interface IOrderDetail extends Base {
    productId: string;
    price: number;
    quantity: number;
}
