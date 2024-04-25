import { IsNotEmpty } from 'class-validator';
import { InputType, Int, Field } from '@nestjs/graphql';
import { User } from 'src/modules/user/user.entity';

@InputType()
export class CreateCollectibleInput {
  @Field(() => String)
  title: string

  @IsNotEmpty()
  @Field(() => String)
  ownerId: string;
}
