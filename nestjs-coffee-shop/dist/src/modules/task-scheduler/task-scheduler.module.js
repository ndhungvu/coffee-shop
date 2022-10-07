"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const task_scheduler_service_1 = require("./task-scheduler.service");
const task_scheduler_controller_1 = require("./task-scheduler.controller");
let TaskSchedulerModule = class TaskSchedulerModule {
};
TaskSchedulerModule = __decorate([
    common_1.Module({
        providers: [task_scheduler_service_1.TaskSchedulerService],
        controllers: [task_scheduler_controller_1.TaskSchedulerController],
        exports: [task_scheduler_service_1.TaskSchedulerService],
    })
], TaskSchedulerModule);
exports.TaskSchedulerModule = TaskSchedulerModule;
//# sourceMappingURL=task-scheduler.module.js.map