import { Base } from "@base/base.entity";
export declare class Coupon extends Base {
    limit: number;
    code: string;
    used: number;
    expiredAt: Date;
    type: string;
    productId: string;
    percent: string;
}
