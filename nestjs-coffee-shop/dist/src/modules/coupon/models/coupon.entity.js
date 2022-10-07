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
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../../product/models/product.entity");
const base_entity_1 = require("../../../base/base.entity");
let Coupon = class Coupon extends base_entity_1.Base {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Coupon.prototype, "limit", void 0);
__decorate([
    typeorm_1.Column({ length: 15 }),
    __metadata("design:type", String)
], Coupon.prototype, "code", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Coupon.prototype, "used", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Coupon.prototype, "expiredAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Coupon.prototype, "type", void 0);
__decorate([
    typeorm_1.OneToOne(() => product_entity_1.Product),
    typeorm_1.JoinColumn({ name: 'productId' }),
    __metadata("design:type", String)
], Coupon.prototype, "productId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Coupon.prototype, "percent", void 0);
Coupon = __decorate([
    typeorm_1.Entity()
], Coupon);
exports.Coupon = Coupon;
//# sourceMappingURL=coupon.entity.js.map