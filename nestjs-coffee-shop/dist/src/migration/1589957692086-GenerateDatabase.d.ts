import { MigrationInterface, QueryRunner } from "typeorm";
export declare class GenerateDatabase1589957692086 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
