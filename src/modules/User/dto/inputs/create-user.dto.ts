import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
@InputType()
export class CreateUserInputDTO {
  @Field()
  @IsNotEmpty()
  name: string;
}



