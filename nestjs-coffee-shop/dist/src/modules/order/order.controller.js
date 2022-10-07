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
const order_dto_1 = require("./dtos/order.dto");
const order_input_dto_1 = require("./dtos/order-input.dto");
const response_get_list_interface_1 = require("../../base/response-get-list.interface");
const passport_1 = require("@nestjs/passport");
const common_sort_enum_1 = require("../../common/enums/common-sort.enum");
const order_list_dto_1 = require("./dtos/order-list.dto");
const get_user_decorator_1 = require("../../common/decorators/get-user.decorator");
const user_interface_1 = require("../user/interfaces/user.interface");
let OrderController = class OrderController {
    constructor(service) {
        this.service = service;
    }
    async getList(queryObj) {
        return this.service.getList(queryObj);
    }
    getById(id) {
        return this.service.getById(id);
    }
    create(user, orderInput) {
        return this.service.create(Object.assign(Object.assign({}, orderInput), { userId: user.id }));
    }
    async update(user, id, orderInput) {
        return this.service.update(id, Object.assign(Object.assign({}, orderInput), { userId: user.id }));
    }
    async patch(user, id, orderInput) {
        return this.service.update(id, Object.assign(Object.assign({}, orderInput), { userId: user.id }));
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
    swagger_1.ApiOperation({ summary: 'Get list order' }),
    swagger_1.ApiOkResponse({ type: order_list_dto_1.OrderListDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getList", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get order by id' }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `Order's id` }),
    swagger_1.ApiOkResponse({ type: order_dto_1.OrderDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getById", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Create new order' }),
    swagger_1.ApiBody({ type: order_input_dto_1.OrderInputDto }),
    swagger_1.ApiCreatedResponse({ type: order_dto_1.OrderDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post(),
    __param(0, get_user_decorator_1.GetUser()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, order_input_dto_1.OrderInputDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "create", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Update order' }),
    swagger_1.ApiBody({ type: order_input_dto_1.OrderInputDto }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `Order's id` }),
    swagger_1.ApiOkResponse({ type: order_dto_1.OrderDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Put(':id'),
    __param(0, get_user_decorator_1.GetUser()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, order_input_dto_1.OrderInputDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "update", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Update a part of order' }),
    swagger_1.ApiBody({ type: order_input_dto_1.OrderInputDto }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `Order's id` }),
    swagger_1.ApiOkResponse({ type: order_dto_1.OrderDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Patch(':id'),
    __param(0, get_user_decorator_1.GetUser()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "patch", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Delete an order' }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `Order's id` }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Delete(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "delete", null);
OrderController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('Order'),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Controller('orders'),
    __metadata("design:paramtypes", [Object])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map