import { Base } from "@base/base.entity";
export declare class OrderDetail extends Base {
    orderId: string;
    productId: string;
    productColorId: string;
    quantity: number;
    sellPrice: number;
}
