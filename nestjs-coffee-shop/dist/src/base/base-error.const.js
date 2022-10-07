"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_error_interface_1 = require("../common/interfaces/common-error.interface");
const common_1 = require("@nestjs/common");
exports.BaseErrorConst = {
    badIdentity: {
        statusCode: common_1.HttpStatus.BAD_REQUEST,
        message: 'Argument [id] must be a single String of 12 bytes or a string of 24 hex characters',
        errorCode: 'invalidParameter',
        location: 'baseService',
    },
    notFound: {
        statusCode: common_1.HttpStatus.NOT_FOUND,
        message: 'Item not found',
        errorCode: 'notFoundItem',
        location: 'baseService',
    },
    duplicatedKey: {
        statusCode: common_1.HttpStatus.BAD_REQUEST,
        message: 'Duplicate key error collection',
        errorCode: 'duplicateKey',
        location: 'baseService',
    },
};
//# sourceMappingURL=base-error.const.js.map