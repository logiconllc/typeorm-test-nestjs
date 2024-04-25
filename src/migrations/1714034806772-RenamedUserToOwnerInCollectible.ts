import { MigrationInterface, QueryRunner } from "typeorm";

export class RenamedUserToOwnerInCollectible1714034806772 implements MigrationInterface {
    name = 'RenamedUserToOwnerInCollectible1714034806772'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Collectible" DROP CONSTRAINT "FK_0ee10009de4d00eb6bc9a3d43f6"`);
        await queryRunner.query(`ALTER TABLE "Collectible" RENAME COLUMN "userId" TO "ownerId"`);
        await queryRunner.query(`ALTER TABLE "Collectible" ADD CONSTRAINT "FK_fea8ee16a05e37cab34ddc9c628" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Collectible" DROP CONSTRAINT "FK_fea8ee16a05e37cab34ddc9c628"`);
        await queryRunner.query(`ALTER TABLE "Collectible" RENAME COLUMN "ownerId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "Collectible" ADD CONSTRAINT "FK_0ee10009de4d00eb6bc9a3d43f6" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
