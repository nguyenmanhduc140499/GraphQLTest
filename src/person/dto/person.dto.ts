import { Hobby } from '../../hobby/dto/hobby.dto';
import { Schema as MongooseSchema } from 'mongoose';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class Person {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  name?: string;

  @Field(() => String)
  hobbies?: Hobby[];
}
