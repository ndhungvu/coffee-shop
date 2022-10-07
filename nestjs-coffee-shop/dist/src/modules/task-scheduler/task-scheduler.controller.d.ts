import { TaskSchedulerService } from './task-scheduler.service';
import { TaskSchedule } from './dtos/task-schedule.dto';
export declare class TaskSchedulerController {
    private service;
    constructor(service: TaskSchedulerService);
    getList(): Promise<TaskSchedule[]>;
    getOne(queryObj: TaskSchedule): Promise<Partial<TaskSchedule>>;
}
