import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordFiled1714503693659 implements MigrationInterface {
    name = 'AddPasswordFiled1714503693659'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "password"`);
    }

}
