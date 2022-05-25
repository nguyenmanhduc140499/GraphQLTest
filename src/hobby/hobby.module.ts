import { Hobbis, HobbySchema } from './schema/hobby.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HobbyService } from './hobby.service';
import { HobbyResolver } from './hobby.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hobbis.name, schema: HobbySchema }]),
  ],
  providers: [HobbyService, HobbyResolver],
})
export class HobbyModule {}
