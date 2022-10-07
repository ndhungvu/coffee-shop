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
const user_role_enum_1 = require("../enums/user-role.enum");
const user_provider_enum_1 = require("../enums/user-provider.enum");
class UserInputDto {
    constructor() {
        this.role = user_role_enum_1.UserRole.Customer;
        this.provider = user_provider_enum_1.UserProvider.None;
    }
}
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: 'Username contains 3 - 50 characters.',
    }),
    class_validator_1.Length(3, 50),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], UserInputDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: 'Password contains 6 - 50 characters.',
    }),
    class_validator_1.Length(6, 50),
    __metadata("design:type", Object)
], UserInputDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: 'Name contains 3 - 50 characters.',
        required: false,
    }),
    class_validator_1.IsOptional(),
    class_validator_1.Length(3, 50),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], UserInputDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: 'Avatar can be null.',
        required: false,
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], UserInputDto.prototype, "avatar", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: 'Email contains 3 - 50 characters.',
    }),
    class_validator_1.Length(3, 50),
    class_validator_1.IsEmail(),
    __metadata("design:type", Object)
], UserInputDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        enum: Object.keys(user_role_enum_1.UserRole),
        description: 'UserRole enum',
        default: 'CUSTOMER',
        required: false,
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(user_role_enum_1.UserRole),
    __metadata("design:type", Object)
], UserInputDto.prototype, "role", void 0);
__decorate([
    swagger_1.ApiProperty({
        enum: Object.keys(user_provider_enum_1.UserProvider),
        description: 'User provider enum',
        default: 'NONE',
        required: false,
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(user_provider_enum_1.UserProvider),
    __metadata("design:type", Object)
], UserInputDto.prototype, "provider", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `User's provider id can be null.`,
        required: false,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], UserInputDto.prototype, "providerId", void 0);
exports.UserInputDto = UserInputDto;
//# sourceMappingURL=user-input.dto.js.map