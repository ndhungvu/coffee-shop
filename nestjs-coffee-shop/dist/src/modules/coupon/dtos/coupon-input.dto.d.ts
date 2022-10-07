import { ICoupon } from '../interfaces/coupon.interface';
export declare class CouponInputDto {
    code: ICoupon['code'];
    limit: ICoupon['limit'];
    expiredAt: ICoupon['expiredAt'];
    type: ICoupon['type'];
    productId: ICoupon['productId'];
}
