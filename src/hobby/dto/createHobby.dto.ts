import { InputType, Field } from '@nestjs/graphql';
import { Hobby } from './hobby.dto';
@InputType()
export class CreateHobbyDto extends Hobby {
  @Field(() => String)
  createdAt: Date;
}
