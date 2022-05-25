import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HobbyDocument = Hobbis & Document;

@ObjectType()
@Schema()
export class Hobbis {
  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => Date)
  @Prop()
  createdAt: Date;

  @Field(() => Date)
  @Prop()
  completedAt: Date;

  @Field(() => Date)
  @Prop()
  deletedAt: Date;
}
export const HobbySchema = SchemaFactory.createForClass(Hobbis);
