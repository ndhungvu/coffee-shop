"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenerateDatabase1589943580794 {
    constructor() {
        this.name = 'GenerateDatabase1589943580794';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "avatar" character varying NOT NULL, "email" character varying NOT NULL, "salt" character varying NOT NULL, "role" character varying NOT NULL, "provider" character varying NOT NULL, "providerId" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }
}
exports.GenerateDatabase1589943580794 = GenerateDatabase1589943580794;
//# sourceMappingURL=1589943580794-GenerateDatabase.js.map