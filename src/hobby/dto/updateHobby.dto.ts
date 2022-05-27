import { InputType, Field } from '@nestjs/graphql';
import { Hobby } from './hobby.dto';
@InputType()
export class UpdateHobbyDto extends Hobby {
  @Field(() => String)
  completedAt: Date;
}
