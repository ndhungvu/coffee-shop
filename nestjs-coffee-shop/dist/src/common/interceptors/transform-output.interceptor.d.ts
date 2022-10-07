import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IResponseGetList } from '@base/response-get-list.interface';
interface ClassType<T> {
    new (): T;
}
export declare class TransformOutputInterceptor<T> implements NestInterceptor<T | IResponseGetList<T>> {
    private readonly classType;
    constructor(classType: ClassType<T>);
    intercept(context: ExecutionContext, next: CallHandler<T | IResponseGetList<T>>): Observable<T | IResponseGetList<T>>;
}
export {};
