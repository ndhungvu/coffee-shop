import { Base } from '@base/base.interface';
import { IOrderDetail } from '@modules/order-detail/interfaces/order-detail.interface';
export interface IOrder extends Base {
    userId: string;
    couponId: string;
    details: Partial<IOrderDetail>[];
}
