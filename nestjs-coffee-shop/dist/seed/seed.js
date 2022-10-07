"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postgres = require("pg");
const user_schema_1 = require("../src/modules/user/models/user.schema");
const user_data_1 = require("./user.data");
const product_schema_1 = require("../src/modules/product/models/product.schema");
const product_data_1 = require("./product.data");
async function bootstrap() {
    postgres.connect('postgres://localhost:5432/coffee-shop-management');
    const user = postgres.model('user', user_schema_1.UserSchema);
    await user.remove({});
    await user.create(user_data_1.default);
    const createdUser = user.find();
    await createdUser.then(res => {
        console.log(`Seeded ${res.length} users`);
    });
    const product = postgres.model('product', product_schema_1.ProductSchema);
    await product.remove({});
    await product.create(product_data_1.default);
    const createdProduct = product.find();
    await createdProduct.then(res => {
        console.log(`Seeded ${res.length} products`);
    });
    postgres.disconnect();
}
bootstrap();
//# sourceMappingURL=seed.js.map