import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInputDTO } from './dto/inputs/create-user.dto';
import { ResponsePayload } from './dto/responses/response-user.dto';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  //User Creation For Invite MUTATION
  @Mutation(() => ResponsePayload, { name: 'createUser' })
  async create(@Args('createUserInputDTO') createUserInputDTO: CreateUserInputDTO): Promise<ResponsePayload> {
    const user = await this.usersService.create(createUserInputDTO);
    return {
      status: 200,  
      message: 'User signed up successfully!',
      data: user,
    };
  }

}
