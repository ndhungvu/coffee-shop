export declare const CouponSchema: {
    userId: StringConstructor;
    limit: NumberConstructor;
    code: {
        type: StringConstructor;
        index: boolean;
    };
    used: NumberConstructor;
    expiredAt: DateConstructor;
    type: StringConstructor;
    productId: {
        type: StringConstructor;
        index: boolean;
    };
    isExpired: BooleanConstructor;
};
