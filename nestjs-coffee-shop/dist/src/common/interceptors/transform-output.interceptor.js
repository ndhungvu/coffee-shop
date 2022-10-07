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
const operators_1 = require("rxjs/operators");
const class_transformer_1 = require("class-transformer");
const response_get_list_interface_1 = require("../../base/response-get-list.interface");
let TransformOutputInterceptor = class TransformOutputInterceptor {
    constructor(classType) {
        this.classType = classType;
    }
    intercept(context, next) {
        return next.handle().pipe(operators_1.map(data => {
            if (data && data['items']) {
                data['items'] = class_transformer_1.plainToClass(this.classType, data['items']);
                return data;
            }
            return class_transformer_1.plainToClass(this.classType, data);
        }));
    }
};
TransformOutputInterceptor = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], TransformOutputInterceptor);
exports.TransformOutputInterceptor = TransformOutputInterceptor;
//# sourceMappingURL=transform-output.interceptor.js.map