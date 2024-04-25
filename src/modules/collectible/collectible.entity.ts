import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@ObjectType()
@Entity({ name: 'Collectible' })
export class Collectible extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  public id: string;
 
  @ManyToOne(() => User, (user) => user.collectibles)
  @Field(() => User, {nullable: true})
  public owner: User;

  @Field({ nullable: true })
  @Column({ nullable: true })
  public title: string; 

  
}
