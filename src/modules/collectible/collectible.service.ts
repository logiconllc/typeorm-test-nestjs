// eslint-disable-next-line import/no-extraneous-dependencies
import { HttpStatus, Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { GraphQLError } from 'graphql';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { Collectible } from './collectible.entity';
import { CreateCollectibleInput } from './dto/inputs/create-collectible.input';

@Injectable()
export class CollectibleService {
  constructor(
    @InjectRepository(Collectible)
    private collectibleRepository: Repository<Collectible>,
    private userService: UserService
  ){}

   async create(@Args('createUserInputDTO') createCollectibleInput: CreateCollectibleInput): Promise<Collectible> {
    const user: User = await this.userService.findOne(createCollectibleInput.ownerId);
    if (!user){
      throw new GraphQLError('User not found',{
        extensions: {
          statusCode: HttpStatus.BAD_REQUEST
      }}); 
    }         
    const collectible = this.collectibleRepository.create({owner: user, title: createCollectibleInput.title})
    return collectible.save();

  }

  findAll() : Promise<Collectible[]>{
    return this.collectibleRepository.find();
  }


}
