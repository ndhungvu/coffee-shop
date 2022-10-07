import { Base } from '@base/base.interface';
export interface ICoupon extends Base {
    userId: string;
    code: string;
    limit: number;
    used: number;
    expiredAt: string;
    isExpired: boolean;
    type: string;
    productId: string;
}
