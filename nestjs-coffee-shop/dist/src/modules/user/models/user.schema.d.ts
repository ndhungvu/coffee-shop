/// <reference types="node" />
export declare const UserSchema: {
    username: {
        type: StringConstructor;
        index: boolean;
        unique: boolean;
    };
    password: StringConstructor;
    name: StringConstructor;
    avatar: StringConstructor;
    email: {
        type: StringConstructor;
        index: boolean;
        unique: boolean;
    };
    salt: typeof Buffer;
    role: StringConstructor;
    provider: StringConstructor;
    providerId: {
        type: StringConstructor;
        unique: boolean;
    };
};
