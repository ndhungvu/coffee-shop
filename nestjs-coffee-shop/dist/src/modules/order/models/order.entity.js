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
const base_entity_1 = require("../../../base/base.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/models/user.entity");
const coupon_entity_1 = require("../../coupon/models/coupon.entity");
let Order = class Order extends base_entity_1.Base {
};
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", String)
], Order.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => coupon_entity_1.Coupon),
    typeorm_1.JoinColumn({ name: 'couponId' }),
    __metadata("design:type", String)
], Order.prototype, "couponId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Order.prototype, "totalAmount", void 0);
Order = __decorate([
    typeorm_1.Entity()
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map