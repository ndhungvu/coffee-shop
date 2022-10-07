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
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class TaskSchedule {
}
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: 'Task name',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], TaskSchedule.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: String,
        description: 'Start date',
    }),
    __metadata("design:type", String)
], TaskSchedule.prototype, "startDate", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: Boolean,
        description: 'Check if task is running',
    }),
    __metadata("design:type", Boolean)
], TaskSchedule.prototype, "isRunning", void 0);
exports.TaskSchedule = TaskSchedule;
//# sourceMappingURL=task-schedule.dto.js.map