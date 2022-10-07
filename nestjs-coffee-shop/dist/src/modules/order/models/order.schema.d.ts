export declare const OrderSchema: {
    userId: StringConstructor;
    couponId: {
        type: StringConstructor;
        index: boolean;
    };
    details: {
        productId: {
            type: StringConstructor;
            index: boolean;
        };
        price: NumberConstructor;
        quantity: NumberConstructor;
    }[];
};
