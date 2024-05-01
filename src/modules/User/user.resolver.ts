import { ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInputDTO } from './dto/inputs/create-user.dto';
import { ResponsePayload, UsersResponsePayload } from './dto/responses/response-user.dto';
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

  @Query(() => ResponsePayload, { name: 'getUser' })
  async getUser(@Args('userId') userId: string): Promise<ResponsePayload>{
    const user = await this.usersService.findOne(userId);
    return {
      status: 200,  
      message: 'User found successfully!',
      data: user,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-dupe-class-members
  @UseInterceptors(ClassSerializerInterceptor)
  @Query(() => UsersResponsePayload, { name: 'getTopUsersCollectibleWise' })
  async getTopUsersCollectibleWise(): Promise<UsersResponsePayload>{
    const users = await this.usersService.getUsersSortedbyCollectible();
    return {
      status: 200,  
      message: 'User found successfully!',
      data: users,
    };
  }

}

