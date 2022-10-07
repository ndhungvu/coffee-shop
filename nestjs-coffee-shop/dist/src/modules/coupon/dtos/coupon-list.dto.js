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
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const coupon_dto_1 = require("./coupon.dto");
class CouponListDto {
}
__decorate([
    swagger_1.ApiProperty({
        name: 'items',
        description: 'The collection of items',
        type: [coupon_dto_1.CouponDto],
    }),
    __metadata("design:type", Array)
], CouponListDto.prototype, "items", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: 'total',
        description: 'The total items count',
        type: Number,
    }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CouponListDto.prototype, "total", void 0);
exports.CouponListDto = CouponListDto;
//# sourceMappingURL=coupon-list.dto.js.map