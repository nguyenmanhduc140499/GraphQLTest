import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Hobby } from '../../hobby/dto/hobby.dto';

export type PersonDocument = Persons & Document;

@ObjectType()
@Schema()
export class Persons {
  // @Field(() => String)
  // _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Hobby.name })
  hobbies: MongooseSchema.Types.ObjectId[];

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
export const PersonSchema = SchemaFactory.createForClass(Persons);
