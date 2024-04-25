
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Collectible } from '../collectible/collectible.entity';


@ObjectType()
@Entity({ name: 'User' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  public id: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  public name: string;

  @OneToMany(() => Collectible, (collectible) => collectible.owner)
  @Field(()=> [Collectible])
  public collectibles : Collectible[]
  

}
