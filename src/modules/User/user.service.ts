import { CreateUserInputDTO } from './dto/inputs/create-user.dto';
import {
  Injectable
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserInputDTO): Promise<User>{
    const user: User = this.userRepository.create({name: createUserDto.name});
    return user.save();
  }

   async findOne(userId: string): Promise<User>{
    const user: User = await this.userRepository.findOneBy({ id: userId})
    return user;
  }

}
