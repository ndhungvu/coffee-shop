"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const coupon_controller_1 = require("./coupon.controller");
const coupon_service_1 = require("./coupon.service");
const task_scheduler_module_1 = require("../task-scheduler/task-scheduler.module");
let CouponModule = class CouponModule {
};
CouponModule = __decorate([
    common_1.Module({
        imports: [
            task_scheduler_module_1.TaskSchedulerModule,
        ],
        controllers: [coupon_controller_1.CouponController],
        providers: [coupon_service_1.CouponService],
    })
], CouponModule);
exports.CouponModule = CouponModule;
//# sourceMappingURL=coupon.module.js.map