"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenerateDatabase1589948134668 {
    constructor() {
        this.name = 'GenerateDatabase1589948134668';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "name" character varying(150) NOT NULL, "description" character varying(500), "sell_price" double precision NOT NULL DEFAULT 0, "thumbnail" character varying(500) NOT NULL, "status" character varying(50) NOT NULL, "category_id" character varying(50) NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "coupon" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "limit" integer NOT NULL, "code" character varying(15) NOT NULL, "used" integer NOT NULL, "expiredAt" TIMESTAMP NOT NULL, "type" character varying NOT NULL, "percent" character varying NOT NULL, "productId" uuid, CONSTRAINT "REL_0fe88523931971588e6b18467c" UNIQUE ("productId"), CONSTRAINT "PK_fcbe9d72b60eed35f46dc35a682" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "username" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "avatar" character varying NOT NULL, "email" character varying NOT NULL, "salt" character varying NOT NULL, "role" character varying NOT NULL, "provider" character varying NOT NULL, "providerId" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "coupon" ADD CONSTRAINT "FK_0fe88523931971588e6b18467cb" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coupon" DROP CONSTRAINT "FK_0fe88523931971588e6b18467cb"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "coupon"`, undefined);
        await queryRunner.query(`DROP TABLE "product"`, undefined);
    }
}
exports.GenerateDatabase1589948134668 = GenerateDatabase1589948134668;
//# sourceMappingURL=1589948134668-GenerateDatabase.js.map