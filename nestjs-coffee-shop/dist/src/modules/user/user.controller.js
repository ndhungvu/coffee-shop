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
const user_role_enum_1 = require("./enums/user-role.enum");
const user_dto_1 = require("./dtos/user.dto");
const user_input_dto_1 = require("./dtos/user-input.dto");
const passport_1 = require("@nestjs/passport");
const response_get_list_interface_1 = require("../../base/response-get-list.interface");
const transform_output_interceptor_1 = require("../../common/interceptors/transform-output.interceptor");
const common_sort_enum_1 = require("../../common/enums/common-sort.enum");
const user_list_dto_1 = require("./dtos/user-list.dto");
let UserController = class UserController {
    constructor(service) {
        this.service = service;
    }
    async getList(queryObj) {
        return await this.service.getList(queryObj);
    }
    getById(id) {
        return this.service.getById(id);
    }
    create(userInput) {
        return this.service.create(userInput);
    }
    async update(id, userInput) {
        return this.service.update(id, userInput);
    }
    async patch(id, userInput) {
        return this.service.update(id, userInput);
    }
    delete(id) {
        return this.service.delete(id);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Get list user' }),
    swagger_1.ApiQuery({
        name: 'username',
        type: String,
        description: `Username is required for login`,
        required: false,
    }),
    swagger_1.ApiQuery({
        name: 'role',
        enum: user_role_enum_1.UserRole,
        description: `Role is required for login`,
        required: false,
    }),
    swagger_1.ApiQuery({
        name: 'limit',
        type: String,
        description: `Limit user per request`,
        required: false,
    }),
    swagger_1.ApiQuery({
        name: 'page',
        type: String,
        description: `The page to start picking up user. Offset = limit * page`,
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
    swagger_1.ApiOkResponse({ type: user_list_dto_1.UserListDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.UseInterceptors(new transform_output_interceptor_1.TransformOutputInterceptor(user_dto_1.UserDto)),
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getList", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get user by id' }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `User's id` }),
    swagger_1.ApiOkResponse({ type: user_dto_1.UserDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.UseInterceptors(new transform_output_interceptor_1.TransformOutputInterceptor(user_dto_1.UserDto)),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getById", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Create new user' }),
    swagger_1.ApiBody({ type: user_input_dto_1.UserInputDto }),
    swagger_1.ApiCreatedResponse({ type: user_dto_1.UserDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.UseInterceptors(new transform_output_interceptor_1.TransformOutputInterceptor(user_dto_1.UserDto)),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_dto_1.UserInputDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Update user' }),
    swagger_1.ApiBody({ type: user_input_dto_1.UserInputDto }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `User's id` }),
    swagger_1.ApiOkResponse({ type: user_dto_1.UserDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.UseInterceptors(new transform_output_interceptor_1.TransformOutputInterceptor(user_dto_1.UserDto)),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_input_dto_1.UserInputDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Update a part of user' }),
    swagger_1.ApiBody({ type: user_input_dto_1.UserInputDto }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `User's id` }),
    swagger_1.ApiOkResponse({ type: user_dto_1.UserDto }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.UseInterceptors(new transform_output_interceptor_1.TransformOutputInterceptor(user_dto_1.UserDto)),
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_input_dto_1.UserInputDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "patch", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Delete a user' }),
    swagger_1.ApiParam({ name: 'id', type: String, description: `User's id` }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Delete(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
UserController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('User'),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map