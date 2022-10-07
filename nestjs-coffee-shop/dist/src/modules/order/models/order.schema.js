"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_detail_schema_1 = require("../../order-detail/models/order-detail.schema");
exports.OrderSchema = {
    userId: String,
    couponId: { type: String, index: true },
    details: [order_detail_schema_1.OrderDetailSchema],
};
//# sourceMappingURL=order.schema.js.map