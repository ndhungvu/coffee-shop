"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenerateDatabase1589878053939 {
    constructor() {
        this.name = 'GenerateDatabase1589878053939';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "test" character varying NOT NULL`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "test"`, undefined);
    }
}
exports.GenerateDatabase1589878053939 = GenerateDatabase1589878053939;
//# sourceMappingURL=1589878053939-GenerateDatabase.js.map