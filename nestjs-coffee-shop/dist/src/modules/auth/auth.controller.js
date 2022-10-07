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
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
const login_input_dto_1 = require("./dtos/login-input.dto");
const login_dto_1 = require("./dtos/login.dto");
const user_input_dto_1 = require("../user/dtos/user-input.dto");
let AuthController = class AuthController {
    constructor(service) {
        this.service = service;
    }
    login(req) {
        return this.service.login(req.user);
    }
    signUp(createDto) {
        return this.service.signUp(createDto);
    }
    googleLogin() { }
    googleLoginCallback(req, res) {
        if (req.user) {
            res.redirect('http://localhost:3000/login/success/' + req.user.access_token);
        }
        else {
            res.redirect('http://localhost:3000/login/failure');
        }
    }
    facebookLogin() { }
    facebookLoginCallback(req, res) {
        if (req.user) {
            res.redirect('http://localhost:3000/login/success/' + req.user.access_token);
        }
        else {
            res.redirect('http://localhost:3000/login/failure');
        }
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Login by manual account' }),
    swagger_1.ApiBody({ type: login_input_dto_1.LoginInputDto }),
    swagger_1.ApiOkResponse({ type: login_dto_1.LoginDto }),
    common_1.UseGuards(passport_1.AuthGuard('local')),
    common_1.Post('login'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Sign up manual account' }),
    swagger_1.ApiBody({ type: user_input_dto_1.UserInputDto }),
    swagger_1.ApiOkResponse({ type: login_dto_1.LoginDto }),
    common_1.Post('signup'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_dto_1.UserInputDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Login with Google' }),
    common_1.Get('google/login'),
    common_1.UseGuards(passport_1.AuthGuard('google')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleLogin", null);
__decorate([
    common_1.Get('google/callback'),
    common_1.UseGuards(passport_1.AuthGuard('google')),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleLoginCallback", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Login with Facebook' }),
    common_1.Get('facebook/login'),
    common_1.UseGuards(passport_1.AuthGuard('facebook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "facebookLogin", null);
__decorate([
    common_1.Get('facebook/callback'),
    common_1.UseGuards(passport_1.AuthGuard('facebook')),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "facebookLoginCallback", null);
AuthController = __decorate([
    swagger_1.ApiTags('Auth'),
    common_1.Controller(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map