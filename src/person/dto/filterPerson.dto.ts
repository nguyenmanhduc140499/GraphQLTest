import { Hobby } from 'src/hobby/dto/hobby.dto';
import { Schema as MongooseSchema } from 'mongoose';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ListPersonInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  hobbies?: Hobby[];
}
