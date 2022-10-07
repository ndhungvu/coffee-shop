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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const task_scheduler_service_1 = require("./task-scheduler.service");
const task_schedule_dto_1 = require("./dtos/task-schedule.dto");
let TaskSchedulerController = class TaskSchedulerController {
    constructor(service) {
        this.service = service;
    }
    async getList() {
        return await this.service.getList();
    }
    async getOne(queryObj) {
        return await this.service.getOne(queryObj.name);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Get list task' }),
    swagger_1.ApiOkResponse({ type: [task_schedule_dto_1.TaskSchedule] }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskSchedulerController.prototype, "getList", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get task by name' }),
    swagger_1.ApiQuery({
        name: 'name',
        type: String,
        description: `Name of task`,
    }),
    swagger_1.ApiOkResponse({ type: [task_schedule_dto_1.TaskSchedule] }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get('task'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_schedule_dto_1.TaskSchedule]),
    __metadata("design:returntype", Promise)
], TaskSchedulerController.prototype, "getOne", null);
TaskSchedulerController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('Scheduler'),
    common_1.Controller('task-schedulers'),
    __metadata("design:paramtypes", [task_scheduler_service_1.TaskSchedulerService])
], TaskSchedulerController);
exports.TaskSchedulerController = TaskSchedulerController;
//# sourceMappingURL=task-scheduler.controller.js.map