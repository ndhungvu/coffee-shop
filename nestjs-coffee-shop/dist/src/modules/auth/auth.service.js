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
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const argon2 = require("argon2");
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async validateUser(username, password) {
        const user = await this.userService.getOne({ username: username });
        if (user && (await argon2.verify(user.password, password))) {
            return user;
        }
        return null;
    }
    async getSocialUser(providerId) {
        return (await this.userService.getOne({ providerId: providerId })) || null;
    }
    async login(user) {
        const payload = {
            id: user.id,
            username: user.username,
            role: user.role,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async signUp(user) {
        const returnedUser = await this.userService.create(user);
        const payload = {
            id: returnedUser.id,
            username: returnedUser.username,
            role: returnedUser.role,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map