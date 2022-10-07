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
const class_validator_1 = require("class-validator");
const coupon_type_enum_1 = require("../enums/coupon-type.enum");
const class_transformer_1 = require("class-transformer");
class CouponInputDto {
    constructor() {
        this.type = coupon_type_enum_1.CouponType.Product;
    }
}
__decorate([
    swagger_1.ApiProperty({
        type: Number,
        description: `Coupon's code.`,
    }),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], CouponInputDto.prototype, "code", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: Number,
        description: `Coupon's limit.`,
        required: false,
    }),
    class_validator_1.IsNumber(),
    class_validator_1.IsPositive(),
    __metadata("design:type", Object)
], CouponInputDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `Coupon's expired date.`,
        required: false,
    }),
    class_transformer_1.Transform(date => new Date(date)),
    class_validator_1.MinDate(new Date()),
    __metadata("design:type", Object)
], CouponInputDto.prototype, "expiredAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        enum: Object.keys(coupon_type_enum_1.CouponType),
        description: `Coupon's type.`,
        default: 'PRODUCT',
        required: false,
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(coupon_type_enum_1.CouponType),
    __metadata("design:type", Object)
], CouponInputDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `Product's id.`,
    }),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], CouponInputDto.prototype, "productId", void 0);
exports.CouponInputDto = CouponInputDto;
//# sourceMappingURL=coupon-input.dto.js.map