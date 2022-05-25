import { UpdateHobbyDto } from './dto/updateHobby.dto';
import { CreateHobbyDto } from './dto/createHobby.dto';
import { ListHobbyInput } from './dto/filterHobby.dto';
import { Hobby } from './../hobby/dto/hobby.dto';
import { Schema as MongooseSchema } from 'mongoose';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HobbyService } from './hobby.service';
import { filter } from 'rxjs';

@Resolver(() => Hobby)
export class HobbyResolver {
  constructor(private hobbyService: HobbyService) {}

  @Query(() => Hobby)
  async oneHobby(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.hobbyService.findOne(_id);
  }

  @Query(() => Hobby)
  async hobbyByFilter(
    @Args('filter', { type: () => String }) filter?: ListHobbyInput,
  ) {
    return this.hobbyService.findbyFilter(filter);
  }

  @Mutation(() => Hobby)
  async createHobby(@Args('payload') payload: CreateHobbyDto) {
    return this.hobbyService.create(payload);
  }

  @Mutation(() => Hobby)
  async updateHobby(@Args('payload') payload: UpdateHobbyDto) {
    return this.hobbyService.update(payload);
  }

  @Mutation(() => Hobby)
  async deleteHobby(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.hobbyService.delete(_id);
  }
}
