import { InputType, Field } from '@nestjs/graphql';
import { Person } from './person.dto';

@InputType()
export class CreatePersonDto extends Person {
  @Field(() => String)
  createdAt?: Date;
}
