"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = {
    username: { type: String, index: true, unique: true },
    password: String,
    name: String,
    avatar: String,
    email: { type: String, index: true, unique: true },
    salt: Buffer,
    role: String,
    provider: String,
    providerId: { type: String, unique: true },
};
//# sourceMappingURL=user.schema.js.map