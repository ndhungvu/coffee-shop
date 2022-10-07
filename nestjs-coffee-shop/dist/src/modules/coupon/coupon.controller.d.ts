import { CouponInputDto } from './dtos/coupon-input.dto';
import { ICoupon } from './interfaces/coupon.interface';
import { IResponseGetList } from '@base/response-get-list.interface';
import { IUser } from '@modules/user/interfaces/user.interface';
import { FilterQuery } from 'typeorm';
export declare class CouponController {
    private service;
    constructor(service: any);
    getList(queryObj: FilterQuery<ICoupon>): Promise<IResponseGetList<ICoupon>>;
    getByCode(queryObj: FilterQuery<ICoupon>): Promise<ICoupon>;
    getById(id: ICoupon['id']): Promise<ICoupon>;
    create(user: IUser, couponInput: CouponInputDto): Promise<ICoupon>;
    update(user: IUser, id: ICoupon['id'], couponInput: CouponInputDto): Promise<ICoupon>;
    patch(user: IUser, id: ICoupon['id'], couponInput: Partial<CouponInputDto>): Promise<ICoupon>;
    delete(id: ICoupon['id']): any;
}
