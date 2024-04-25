import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCollectibleTable1713902970909 implements MigrationInterface {
    name = 'AddCollectibleTable1713902970909'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Collectible" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying, "userId" uuid, CONSTRAINT "PK_c8d25726d4f3394e1213b829fad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Collectible" ADD CONSTRAINT "FK_0ee10009de4d00eb6bc9a3d43f6" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Collectible" DROP CONSTRAINT "FK_0ee10009de4d00eb6bc9a3d43f6"`);
        await queryRunner.query(`DROP TABLE "Collectible"`);
        await queryRunner.query(`DROP TABLE "User"`);
    }

}
