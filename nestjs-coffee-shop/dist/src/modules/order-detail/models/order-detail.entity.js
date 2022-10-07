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
const base_entity_1 = require("../../../base/base.entity");
const order_entity_1 = require("../../order/models/order.entity");
const product_entity_1 = require("../../product/models/product.entity");
let OrderDetail = class OrderDetail extends base_entity_1.Base {
};
__decorate([
    typeorm_1.ManyToOne(() => order_entity_1.Order),
    typeorm_1.JoinColumn({ name: 'orderId' }),
    __metadata("design:type", String)
], OrderDetail.prototype, "orderId", void 0);
__decorate([
    typeorm_1.OneToOne(() => product_entity_1.Product),
    typeorm_1.JoinColumn({ name: 'productId' }),
    __metadata("design:type", String)
], OrderDetail.prototype, "productId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrderDetail.prototype, "productColorId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OrderDetail.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "sellPrice", void 0);
OrderDetail = __decorate([
    typeorm_1.Entity()
], OrderDetail);
exports.OrderDetail = OrderDetail;
//# sourceMappingURL=order-detail.entity.js.map