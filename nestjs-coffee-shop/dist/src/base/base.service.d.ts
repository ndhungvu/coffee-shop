import { IResponseGetList } from '@base/response-get-list.interface';
import { FilterQuery } from 'typeorm';
export declare abstract class BaseService<T> {
    model: any;
    constructor();
    getList(params: any): Promise<IResponseGetList<T>>;
    getOne(params: FilterQuery<T>): Promise<T>;
    getById(id: string): Promise<T>;
    create(data: Partial<T>): Promise<T>;
    update(id: string, data: T | Partial<T>): Promise<T>;
    patch(id: string, data: Partial<T>): Promise<T>;
    delete(id: string): Promise<T>;
}
