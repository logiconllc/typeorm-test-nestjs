import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/modules/user/user.entity';
import { Collectible } from '../../collectible.entity';

@ObjectType()
export class CreateCollectibleResponseDto {
  @Field({ nullable: true })
  status: number;

  @Field({ nullable: true })
  message: string;

  @Field(() => Collectible, { nullable: true }) // Update the type to User
  data?: Collectible | null;
}
