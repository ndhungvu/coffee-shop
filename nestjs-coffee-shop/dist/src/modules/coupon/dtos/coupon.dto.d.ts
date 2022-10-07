import { BaseDto } from '@base/base.dto';
import { ICoupon } from '../interfaces/coupon.interface';
export declare class CouponDto extends BaseDto {
    id: ICoupon['id'];
    userId: ICoupon['userId'];
    code: ICoupon['code'];
    limit: number;
    used: ICoupon['used'];
    expiredAt: string;
    type: ICoupon['type'];
    productId: ICoupon['productId'];
    get isAvailable(): boolean;
}
