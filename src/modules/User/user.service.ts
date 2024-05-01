import {
  Injectable
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomInt } from 'crypto';
import { Repository } from 'typeorm';
import { CreateUserInputDTO } from './dto/inputs/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserInputDTO): Promise<User>{
    const user: User = this.userRepository.create({name: createUserDto.name, password: randomInt(10).toString()});
    return user.save();
  }

  async findOne(userId: string): Promise<User>{
    const user: User = await this.userRepository.findOneBy({ id: userId}) 
    return user;
  }

  async getUsersSortedbyCollectible(): Promise<User[]>{
    const users = await this. userRepository.find();
    return users;
  }


  

}
