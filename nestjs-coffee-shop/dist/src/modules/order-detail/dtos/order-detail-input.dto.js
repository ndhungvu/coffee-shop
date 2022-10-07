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
class OrderDetailInputDto {
}
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `Product's id.`,
    }),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], OrderDetailInputDto.prototype, "productId", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: Number,
        description: `Product's price.`,
    }),
    class_validator_1.IsNumber(),
    class_validator_1.IsPositive(),
    __metadata("design:type", Object)
], OrderDetailInputDto.prototype, "price", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: Number,
        description: `Product's quantity.`,
    }),
    class_validator_1.IsNumber(),
    class_validator_1.IsPositive(),
    __metadata("design:type", Object)
], OrderDetailInputDto.prototype, "quantity", void 0);
exports.OrderDetailInputDto = OrderDetailInputDto;
//# sourceMappingURL=order-detail-input.dto.js.map