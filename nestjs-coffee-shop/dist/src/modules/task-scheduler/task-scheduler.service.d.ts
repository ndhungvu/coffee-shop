import { SchedulerRegistry } from '@nestjs/schedule';
import { TaskSchedule } from './dtos/task-schedule.dto';
export declare class TaskSchedulerService {
    private scheduler;
    constructor(scheduler: SchedulerRegistry);
    addTask(name: TaskSchedule['name'], startDate: TaskSchedule['startDate'], callback: any): Promise<void>;
    addIntervalTask(): void;
    deleteTask(name: TaskSchedule['name']): Promise<any>;
    getList(): Promise<TaskSchedule[]>;
    getOne(name: TaskSchedule['name']): Promise<Partial<TaskSchedule>>;
}
