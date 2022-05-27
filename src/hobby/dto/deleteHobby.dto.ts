import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DeleteHobbyDto {
  @Field(() => String)
  deletedAt: Date;
}
