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
const product_dto_1 = require("./dtos/product.dto");
const product_input_dto_1 = require("./dtos/product-input.dto");
const response_get_list_interface_1 = require("../../base/response-get-list.interface");
const passport_1 = require("@nestjs/passport");
const common_sort_enum_1 = require("../../common/enums/common-sort.enum");
const product_list_dto_1 = require("./dtos/product-list.dto");
const user_interface_1 = require("../user/interfaces/user.interface");
const get_user_decorator_1 = require("../../common/decorators/get-user.decorator");
let ProductController = class ProductController {
    constructor(service) {
        this.service = service;
    }
    async getList(queryObj) {
        return this.service.getList(queryObj);
    }
    getById(id) {
        return this.service.getById(id);
    }
    create(user, productInput) {
        return this.service.create(Object.assign(Object.assign({}, productInput), { userId: user.id }));
    }
    async update(user, id, productInput) {
        return this.service.update(id, Object.assign(Object.assign({}, productInput), { userId: user.id }));
    }
    async patch(user, id, productInput) {
        return this.service.update(id, Object.assign(Object.assign({}, productInput), { userId: user.id }));
    }
    delete(id) {
        return this.service.delete(id);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Get all product' }),
    swagger_1.ApiQuery({
        name: 'name',
        type: String,
        description: `Product's name`,
        required: false,
    }),
    swagger_1.ApiQuery({
        name: 'limit',
        type: String,
        description: `Limit product per request`,
        required: false,
    }),
    swagger_1.ApiQuery({
        name: 'page',
        type: String,
        description: `The page to start picking up product. Offset = limit * page`,
        required: false,
    }),
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
    swagger_1.ApiOkResponse({ type: product_list_dto_1.ProductListDto }),
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getList", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get product by id' }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `Product's id` }),
    swagger_1.ApiOkResponse({ type: product_dto_1.ProductDto }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getById", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Create new product' }),
    swagger_1.ApiBody({ type: product_input_dto_1.ProductInputDto }),
    swagger_1.ApiCreatedResponse({ type: product_dto_1.ProductDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post(),
    __param(0, get_user_decorator_1.GetUser()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_input_dto_1.ProductInputDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Update product' }),
    swagger_1.ApiBody({ type: product_input_dto_1.ProductInputDto }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `Product's id` }),
    swagger_1.ApiOkResponse({ type: product_dto_1.ProductDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Put(':id'),
    __param(0, get_user_decorator_1.GetUser()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, product_input_dto_1.ProductInputDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Update a part of product' }),
    swagger_1.ApiBody({ type: product_input_dto_1.ProductInputDto }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `Product's id` }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiOkResponse({ type: product_dto_1.ProductDto }),
    common_1.Patch(':id'),
    __param(0, get_user_decorator_1.GetUser()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "patch", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Delete a product' }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `Product's id` }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Delete(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "delete", null);
ProductController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('Product'),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Controller('products'),
    __metadata("design:paramtypes", [Object])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map