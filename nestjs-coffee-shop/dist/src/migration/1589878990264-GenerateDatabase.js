"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenerateDatabase1589878990264 {
    constructor() {
        this.name = 'GenerateDatabase1589878990264';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "test" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }
}
exports.GenerateDatabase1589878990264 = GenerateDatabase1589878990264;
//# sourceMappingURL=1589878990264-GenerateDatabase.js.map