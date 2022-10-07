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
const user_role_enum_1 = require("../enums/user-role.enum");
const class_transformer_1 = require("class-transformer");
const base_dto_1 = require("../../../base/base.dto");
const user_provider_enum_1 = require("../enums/user-provider.enum");
const class_validator_1 = require("class-validator");
class UserDto extends base_dto_1.BaseDto {
}
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `User's id.`,
    }),
    __metadata("design:type", Object)
], UserDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: 'Username contains 3 - 50 characters.',
    }),
    class_validator_1.Length(3, 50),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], UserDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    class_transformer_1.Exclude(),
    __metadata("design:type", Object)
], UserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    class_transformer_1.Exclude(),
    __metadata("design:type", Object)
], UserDto.prototype, "salt", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: 'Name contains 3 - 50 characters.',
    }),
    class_validator_1.IsOptional(),
    class_validator_1.Length(3, 50),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], UserDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: 'Avatar can be null.',
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], UserDto.prototype, "avatar", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: 'Email contains 3 - 50 characters.',
    }),
    class_validator_1.Length(3, 50),
    class_validator_1.IsEmail(),
    __metadata("design:type", Object)
], UserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        enum: Object.keys(user_role_enum_1.UserRole),
        description: 'UserRole enum',
        default: 'CUSTOMER',
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(user_role_enum_1.UserRole),
    __metadata("design:type", Object)
], UserDto.prototype, "role", void 0);
__decorate([
    swagger_1.ApiProperty({
        enum: Object.keys(user_provider_enum_1.UserProvider),
        description: 'UserProvider enum',
        default: 'NONE',
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(user_provider_enum_1.UserProvider),
    __metadata("design:type", Object)
], UserDto.prototype, "provider", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: `UserProvider's id`,
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], UserDto.prototype, "providerId", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map