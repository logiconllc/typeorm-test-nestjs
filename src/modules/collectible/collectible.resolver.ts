import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Collectible } from './collectible.entity';
import { CollectibleService } from './collectible.service';
import { CreateCollectibleInput } from './dto/inputs/create-collectible.input';
import { CreateCollectibleResponseDto } from './dto/responses/create-collectible-response.dto';

@Resolver(() => Collectible)
export class CollectibleResolver {
  constructor(private readonly collectibleService: CollectibleService) {}

  @Mutation(() => CreateCollectibleResponseDto, { name: 'createCollectible' })
  async createCollectible(@Args('createCollectibleInput') createCollectibleInput: CreateCollectibleInput) {
    try{
      const collectible = await this.collectibleService.create(createCollectibleInput);
      return {
        status: 200,
        message: 'Collectible created successfully!',
        data: collectible,
      };
    } catch (error){
      throw error; 
    }
    
  }

  @Query(() => [Collectible], { name: 'collectible' })
  findAll() {
    return this.collectibleService.findAll();
  }


}
