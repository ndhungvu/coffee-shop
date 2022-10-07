import { ProductDto } from './dtos/product.dto';
import { ProductInputDto } from './dtos/product-input.dto';
import { IProduct } from './interfaces/product.interface';
import { IResponseGetList } from '@base/response-get-list.interface';
import { IUser } from '@modules/user/interfaces/user.interface';
export declare class ProductController {
    private service;
    constructor(service: any);
    getList(queryObj: IProduct): Promise<IResponseGetList<ProductDto>>;
    getById(id: IProduct['id']): Promise<ProductDto>;
    create(user: IUser, productInput: ProductInputDto): Promise<ProductDto>;
    update(user: IUser, id: IProduct['id'], productInput: ProductInputDto): Promise<ProductDto>;
    patch(user: IUser, id: IProduct['id'], productInput: Partial<ProductInputDto>): Promise<ProductDto>;
    delete(id: IProduct['id']): any;
}
