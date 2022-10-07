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
const passport_1 = require("@nestjs/passport");
const passport_facebook_1 = require("passport-facebook");
const auth_service_1 = require("../auth.service");
const user_input_dto_1 = require("../../user/dtos/user-input.dto");
const user_role_enum_1 = require("../../user/enums/user-role.enum");
const auth_errors_constant_1 = require("../auth-errors.constant");
let FacebookStrategy = class FacebookStrategy extends passport_1.PassportStrategy(passport_facebook_1.Strategy, 'facebook') {
    constructor(authService) {
        super({
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: process.env.FACEBOOK_CALLBACK_URL,
            passReqToCallback: true,
            scope: [],
        });
        this.authService = authService;
    }
    async validate(request, accessToken, refreshToken, profile) {
        if (!profile) {
            throw new common_1.UnauthorizedException(auth_errors_constant_1.AuthErrorConst.authError);
        }
        const user = await this.authService.getSocialUser(profile.id);
        if (!user) {
            return await this.authService.signUp({
                username: profile.email || profile.id,
                email: profile.email,
                role: user_role_enum_1.UserRole.Customer,
                provider: profile.provider.toUpperCase(),
                providerId: profile.id,
            });
        }
        return await this.authService.login(user);
    }
};
FacebookStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], FacebookStrategy);
exports.FacebookStrategy = FacebookStrategy;
//# sourceMappingURL=facebook.strategy.js.map