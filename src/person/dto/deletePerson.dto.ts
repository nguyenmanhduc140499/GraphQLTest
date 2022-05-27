import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePersonDto {
  @Field(() => String, { nullable: true })
  deletedAt?: Date;
}
