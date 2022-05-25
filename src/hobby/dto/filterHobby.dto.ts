import { Schema as MongooseSchema } from 'mongoose';

export class ListHobbyInput {
  _id?: MongooseSchema.Types.ObjectId;
  name?: string;
}
