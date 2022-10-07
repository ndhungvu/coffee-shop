import { ICoupon } from './interfaces/coupon.interface';
import { TaskSchedulerService } from '@modules/task-scheduler/task-scheduler.service';
export declare class CouponService {
    private cronTask;
    model: any;
    constructor(cronTask: TaskSchedulerService);
    getByCode(code: ICoupon['code']): Promise<ICoupon>;
    create(data: Partial<ICoupon>): Promise<ICoupon>;
    update(id: string, data: Partial<ICoupon>): Promise<ICoupon>;
    addDisableCronTask(data: ICoupon): void;
}
