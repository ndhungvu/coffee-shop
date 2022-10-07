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
const base_dto_1 = require("../../../base/base.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const coupon_type_enum_1 = require("../enums/coupon-type.enum");
class CouponDto extends base_dto_1.BaseDto {
    get isAvailable() {
        return this.used < this.limit;
    }
}
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `Coupon's id.`,
    }),
    __metadata("design:type", Object)
], CouponDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `User's id.`,
    }),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], CouponDto.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: Number,
        description: `Coupon's code.`,
    }),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], CouponDto.prototype, "code", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: Number,
        description: `Coupon's limit.`,
    }),
    class_validator_1.IsNumber(),
    class_validator_1.IsPositive(),
    __metadata("design:type", Number)
], CouponDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: Number,
        description: `Coupon used.`,
    }),
    class_validator_1.IsNumber(),
    class_validator_1.IsPositive(),
    __metadata("design:type", Object)
], CouponDto.prototype, "used", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `Coupon's expired date.`,
    }),
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], CouponDto.prototype, "expiredAt", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `Coupon's type.`,
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(coupon_type_enum_1.CouponType),
    __metadata("design:type", Object)
], CouponDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `product's id.`,
    }),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], CouponDto.prototype, "productId", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], CouponDto.prototype, "isAvailable", null);
exports.CouponDto = CouponDto;
//# sourceMappingURL=coupon.dto.js.map