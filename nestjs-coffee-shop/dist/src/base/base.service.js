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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const response_get_list_interface_1 = require("./response-get-list.interface");
const base_error_const_1 = require("./base-error.const");
const common_sort_enum_1 = require("../common/enums/common-sort.enum");
let BaseService = class BaseService {
    constructor() { }
    async getList(params) {
        const { limit, page, sortBy, sortType } = params, filterItem = __rest(params, ["limit", "page", "sortBy", "sortType"]);
        let totalRecords;
        const sortObj = {};
        sortBy
            ? (sortObj[sortBy] = common_sort_enum_1.CommonSort[sortType.toUpperCase()] || common_sort_enum_1.CommonSort.ASC)
            : (sortObj['createdAt'] = common_sort_enum_1.CommonSort.DESC);
        await this.model
            .countDocuments(filterItem)
            .then((count) => {
            totalRecords = +count;
        });
        return this.model
            .find(filterItem, null, {
            limit: +limit,
            skip: +page * +limit,
            sort: sortObj,
        })
            .then(docs => {
            const items = docs.map(item => item.toObject());
            return { items: items, total: totalRecords };
        })
            .catch(err => {
            throw err;
        });
    }
    async getOne(params) {
        return this.model.findOne(params, {}, { lean: true }, function (err, doc) {
            if (err && err['path'] === 'id') {
                throw new common_1.BadRequestException(base_error_const_1.BaseErrorConst.badIdentity);
            }
            return doc;
        });
    }
    async getById(id) {
        return await this.model.findById(id, {}, { lean: true }, function (err, doc) {
            if (err && err['path'] === 'id') {
                throw new common_1.BadRequestException(base_error_const_1.BaseErrorConst.badIdentity);
            }
            return doc;
        });
    }
    create(data) {
        const createdData = new this.model(data);
        return createdData
            .save()
            .then(doc => {
            return doc.toObject();
        })
            .catch(err => {
            switch (err.code) {
                case 11000: {
                    throw new common_1.BadRequestException(Object.assign(Object.assign({}, base_error_const_1.BaseErrorConst.duplicatedKey), { keyValue: err.keyValue }));
                }
                default: {
                    throw err;
                }
            }
        });
    }
    async update(id, data) {
        return this.model
            .findByIdAndUpdate(id, data, { new: true })
            .then(doc => {
            return doc.toObject();
        })
            .catch(err => {
            if (err['path'] === 'id') {
                throw new common_1.BadRequestException(base_error_const_1.BaseErrorConst.badIdentity);
            }
            throw err;
        });
    }
    async patch(id, data) {
        return this.model
            .findByIdAndUpdate(id, data, { new: true })
            .then(doc => {
            return doc.toObject();
        })
            .catch(err => {
            if (err && err['path'] === 'id') {
                throw new common_1.BadRequestException(base_error_const_1.BaseErrorConst.badIdentity);
            }
        });
    }
    async delete(id) {
        return this.model.findByIdAndRemove(id, function (err, doc) {
            if (err && err['path'] === 'id') {
                throw new common_1.BadRequestException(base_error_const_1.BaseErrorConst.badIdentity);
            }
            return;
        });
    }
};
BaseService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map