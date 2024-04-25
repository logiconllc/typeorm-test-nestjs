import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CollectibleService } from './collectible.service';
import { CollectibleResolver } from './collectible.resolver';
import { Collectible } from './collectible.entity';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Collectible]), UserModule],
  providers: [CollectibleResolver, CollectibleService]
})
export class CollectibleModule {}
