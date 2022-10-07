"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const common_error_interface_1 = require("../../common/interfaces/common-error.interface");
exports.AuthErrorConst = {
    authError: {
        statusCode: common_1.HttpStatus.UNAUTHORIZED,
        message: 'The authorization credentials provided for the request are invalid. Check the value of the Authorization HTTP request header.',
        errorCode: 'authError',
        location: 'authService',
    },
};
//# sourceMappingURL=auth-errors.constant.js.map