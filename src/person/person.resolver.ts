import { UpdatePersonDto } from './dto/updatePerson.dto';
import { PersonService } from './person.service';
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Person } from './dto/person.dto';
// import { Query } from '@nestjs/common';
import { Schema as MongooseSchema } from 'mongoose';
import { ListPersonInput } from './dto/filterPerson.dto';
import { CreatePersonDto } from './dto/createPerson.dto';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query(() => Person)
  async onePerson(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.personService.findOne(_id);
  }

  @Query(() => [Person])
  async personByFilter(
    @Args('filter', { nullable: true }) filters?: ListPersonInput,
  ) {
    return this.personService.findbyFilter(filters);
  }

  @Mutation(() => Person)
  async createPerson(@Args('payload') payload: CreatePersonDto) {
    return this.personService.create(payload);
  }

  @Mutation(() => Person)
  async updateperson(@Args('payload') payload: UpdatePersonDto) {
    return this.personService.update(payload);
  }

  @Mutation(() => Person)
  async deletePerson(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.personService.delete(_id);
  }
}
