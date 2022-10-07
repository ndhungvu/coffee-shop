"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenerateDatabase1589877504289 {
    constructor() {
        this.name = 'GenerateDatabase1589877504289';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "test" character varying NOT NULL`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "test"`, undefined);
    }
}
exports.GenerateDatabase1589877504289 = GenerateDatabase1589877504289;
//# sourceMappingURL=1589877504289-GenerateDatabase.js.map