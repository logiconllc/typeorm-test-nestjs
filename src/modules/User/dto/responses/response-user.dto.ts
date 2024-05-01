import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user.entity';

@ObjectType()
export class ResponsePayload {
  @Field({ nullable: true })
  status: number;

  @Field({ nullable: true })
  message: string;

  @Field(() => User, { nullable: true }) // Update the type to User
  data?: User | null;
}

@ObjectType()
export class UsersResponsePayload {
  @Field({ nullable: true })
  status: number;

  @Field({ nullable: true })
  message: string;

  @Field(() => [User]) // Update the type to User
  data?: User[];
}
