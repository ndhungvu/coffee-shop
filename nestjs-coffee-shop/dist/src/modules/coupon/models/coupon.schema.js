"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponSchema = {
    userId: String,
    limit: Number,
    code: { type: String, index: true },
    used: Number,
    expiredAt: Date,
    type: String,
    productId: { type: String, index: true },
    isExpired: Boolean,
};
//# sourceMappingURL=coupon.schema.js.map