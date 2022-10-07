"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../base/base.service");
const task_scheduler_service_1 = require("../task-scheduler/task-scheduler.service");
const base_error_const_1 = require("../../base/base-error.const");
let CouponService = class CouponService {
    constructor(cronTask) {
        this.cronTask = cronTask;
    }
    async getByCode(code) {
        return this.model
            .findOne({ code: code }, {}, { lean: true })
            .then(doc => {
            return doc;
        })
            .catch(err => {
            throw new common_1.NotFoundException(base_error_const_1.BaseErrorConst.notFound);
        });
    }
    create(data) {
        return this.model
            .create(data)
            .then(doc => {
            if (doc) {
                this.addDisableCronTask(doc.toObject());
            }
            return doc.toObject();
        })
            .catch(err => {
            switch (err.code) {
                case 11000: {
                    throw new common_1.BadRequestException(Object.assign(Object.assign({}, base_error_const_1.BaseErrorConst.duplicatedKey), { keyValue: err.keyValue }));
                }
                default: {
                    throw err;
                }
            }
        });
    }
    async update(id, data) {
        return this.model
            .findByIdAndUpdate(id, data, { new: true })
            .then(doc => {
            if (doc) {
                this.addDisableCronTask(doc.toObject());
            }
            return doc.toObject();
        })
            .catch(err => {
            if (err['path'] === 'id') {
                throw new common_1.BadRequestException(base_error_const_1.BaseErrorConst.badIdentity);
            }
            throw err;
        });
    }
    addDisableCronTask(data) {
        this.cronTask.addTask(`Disable coupon - ${data.id}`, data.expiredAt, () => {
            this.update(data.id, Object.assign(Object.assign({}, data), { isExpired: true }));
        });
    }
};
CouponService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [task_scheduler_service_1.TaskSchedulerService])
], CouponService);
exports.CouponService = CouponService;
//# sourceMappingURL=coupon.service.js.map