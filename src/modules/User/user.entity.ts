
import { Field, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, VirtualColumn } from 'typeorm';
import { Collectible } from '../collectible/collectible.entity';


@ObjectType()
@Entity({ name: 'User' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string;

  @Exclude()
  @Column()
  password: string;

  @OneToMany(() => Collectible, (collectible) => collectible.owner, {nullable: true, eager: true})
  @Field(()=> [Collectible], {nullable: true})
  collectibles : Collectible[]

  @VirtualColumn({ type: 'int', query: (alias) => `SELECT COUNT(*) FROM "Collectible"  WHERE "Collectible"."ownerId" = ${alias}.id`})
  @Field()
  collectibleCount: number;
  

}
