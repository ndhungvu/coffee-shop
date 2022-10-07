import { BaseDto } from '@base/base.dto';
import { IProduct } from '../interfaces/product.interface';
export declare class ProductDto extends BaseDto {
    id: IProduct['id'];
    userId: IProduct['userId'];
    name: IProduct['name'];
    price: IProduct['price'];
    thumbnail: IProduct['thumbnail'];
}
