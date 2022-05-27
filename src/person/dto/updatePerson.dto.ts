import { InputType, Field } from '@nestjs/graphql';
import { Person } from './person.dto';
@InputType()
export class UpdatePersonDto extends Person {
  @Field(() => String, { nullable: true })
  completedAt?: Date;
}
