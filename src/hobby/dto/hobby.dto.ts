import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class Hobby {
  @Field(() => String)
  _id?: string;
  @Field(() => String)
  name?: string;
}
