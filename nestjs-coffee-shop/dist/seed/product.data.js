"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker = require("faker");
const product_input_dto_1 = require("../src/modules/product/dtos/product-input.dto");
const productTotal = +process.env.PRODUCT_TOTAL || 10;
const productFaker = [];
[...Array(productTotal)].forEach(index => {
    const product = {
        name: faker.name.findName(),
        price: faker.random.number(10000),
        thumbnail: faker.internet.avatar()
    };
    productFaker.push(product);
});
exports.default = productFaker;
//# sourceMappingURL=product.data.js.map