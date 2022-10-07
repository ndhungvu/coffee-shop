import { Base } from '@base/base.interface';
export interface IProduct extends Base {
    userId: string;
    name: string;
    price: number;
    thumbnail: string;
}
