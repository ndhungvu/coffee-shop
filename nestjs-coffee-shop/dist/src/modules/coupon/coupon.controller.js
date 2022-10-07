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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const coupon_dto_1 = require("./dtos/coupon.dto");
const coupon_input_dto_1 = require("./dtos/coupon-input.dto");
const response_get_list_interface_1 = require("../../base/response-get-list.interface");
const passport_1 = require("@nestjs/passport");
const common_sort_enum_1 = require("../../common/enums/common-sort.enum");
const coupon_list_dto_1 = require("./dtos/coupon-list.dto");
const get_user_decorator_1 = require("../../common/decorators/get-user.decorator");
const user_interface_1 = require("../user/interfaces/user.interface");
let CouponController = class CouponController {
    constructor(service) {
        this.service = service;
    }
    async getList(queryObj) {
        return this.service.getList(queryObj);
    }
    getByCode(queryObj) {
        return this.service.getByCode(queryObj.code);
    }
    getById(id) {
        return this.service.getById(id);
    }
    create(user, couponInput) {
        return this.service.create(Object.assign(Object.assign({}, couponInput), { userId: user.id }));
    }
    async update(user, id, couponInput) {
        return this.service.update(id, Object.assign(Object.assign({}, couponInput), { userId: user.id }));
    }
    async patch(user, id, couponInput) {
        return this.service.update(id, Object.assign(Object.assign({}, couponInput), { userId: user.id }));
    }
    delete(id) {
        return this.service.delete(id);
    }
};
__decorate([
    swagger_1.ApiQuery({
        name: 'sortBy',
        type: String,
        description: `Sort product by:`,
        required: false,
    }),
    swagger_1.ApiQuery({
        name: 'sortType',
        enum: common_sort_enum_1.CommonSort,
        description: `Sort product by asc or desc`,
        required: false,
    }),
    swagger_1.ApiOperation({ summary: 'Get list coupon' }),
    swagger_1.ApiOkResponse({ type: coupon_list_dto_1.CouponListDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "getList", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get coupon by code' }),
    swagger_1.ApiQuery({ name: 'code', type: String, description: `Coupon's code` }),
    swagger_1.ApiOkResponse({ type: coupon_dto_1.CouponDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get('code'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "getByCode", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get coupon by id' }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `Coupon's id` }),
    swagger_1.ApiOkResponse({ type: coupon_dto_1.CouponDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "getById", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Create new coupon' }),
    swagger_1.ApiBody({ type: coupon_input_dto_1.CouponInputDto }),
    swagger_1.ApiCreatedResponse({ type: coupon_dto_1.CouponDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post(),
    __param(0, get_user_decorator_1.GetUser()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, coupon_input_dto_1.CouponInputDto]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "create", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Update coupon' }),
    swagger_1.ApiBody({ type: coupon_input_dto_1.CouponInputDto }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `Coupon's id` }),
    swagger_1.ApiOkResponse({ type: coupon_dto_1.CouponDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Put(':id'),
    __param(0, get_user_decorator_1.GetUser()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, coupon_input_dto_1.CouponInputDto]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "update", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Update a part of coupon' }),
    swagger_1.ApiBody({ type: coupon_input_dto_1.CouponInputDto }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `Coupon's id` }),
    swagger_1.ApiOkResponse({ type: coupon_dto_1.CouponDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Patch(':id'),
    __param(0, get_user_decorator_1.GetUser()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "patch", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Delete a coupon' }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `Coupon's id` }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Delete(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CouponController.prototype, "delete", null);
CouponController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('Coupon'),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Controller('coupons'),
    __metadata("design:paramtypes", [Object])
], CouponController);
exports.CouponController = CouponController;
//# sourceMappingURL=coupon.controller.js.map