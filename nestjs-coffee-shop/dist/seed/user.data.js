"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker = require("faker");
const user_input_dto_1 = require("../src/modules/user/dtos/user-input.dto");
const userTotal = +process.env.USER_TOTAL || 10;
const userFaker = [];
[...Array(userTotal)].forEach(index => {
    const user = {
        username: faker.internet.userName(),
        name: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        role: faker.random.arrayElement(['CUSTOMER', 'SELLER']),
        provider: faker.random.arrayElement(['FACEBOOK', 'GOOGLE', 'NONE']),
        providerId: faker.random.alphaNumeric(12)
    };
    userFaker.push(user);
});
exports.default = userFaker;
//# sourceMappingURL=user.data.js.map