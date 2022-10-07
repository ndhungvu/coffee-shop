"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const cron_1 = require("cron");
let TaskSchedulerService = class TaskSchedulerService {
    constructor(scheduler) {
        this.scheduler = scheduler;
    }
    async addTask(name, startDate, callback) {
        await this.deleteTask(name);
        const job = new cron_1.CronJob(startDate, callback);
        this.scheduler.addCronJob(name, job);
        job.start();
    }
    addIntervalTask() { }
    async deleteTask(name) {
        try {
            const task = await this.getOne(name);
            if (task)
                this.scheduler.deleteCronJob(name);
        }
        catch (err) {
            return null;
        }
    }
    async getList() {
        const availableJobs = [];
        const jobs = await this.scheduler.getCronJobs();
        jobs.forEach((item, key, map) => {
            availableJobs.push({
                name: key,
                isRunning: item.running,
            });
        });
        return availableJobs;
    }
    async getOne(name) {
        try {
            const job = await this.scheduler.getCronJob(name);
            return {
                isRunning: job.running,
            };
        }
        catch (err) {
            throw new common_1.NotFoundException();
        }
    }
};
TaskSchedulerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [schedule_1.SchedulerRegistry])
], TaskSchedulerService);
exports.TaskSchedulerService = TaskSchedulerService;
//# sourceMappingURL=task-scheduler.service.js.map