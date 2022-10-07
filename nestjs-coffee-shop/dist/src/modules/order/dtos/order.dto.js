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
const swagger_1 = require("@nestjs/swagger");
const order_detail_dto_1 = require("../../order-detail/dtos/order-detail.dto");
const base_dto_1 = require("../../../base/base.dto");
const class_validator_1 = require("class-validator");
class OrderDto extends base_dto_1.BaseDto {
}
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `Order's id.`,
    }),
    __metadata("design:type", Object)
], OrderDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `User's id.`,
    }),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], OrderDto.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `Coupon's id.`,
    }),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], OrderDto.prototype, "couponId", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: [order_detail_dto_1.OrderDetailDto],
        description: `Order details.`,
    }),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], OrderDto.prototype, "detail", void 0);
exports.OrderDto = OrderDto;
//# sourceMappingURL=order.dto.js.map