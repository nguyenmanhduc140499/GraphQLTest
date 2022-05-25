import { Hobby } from 'src/hobby/dto/hobby.dto';
import { Schema as MongooseSchema } from 'mongoose';

export class ListPersonInput {
  _id?: MongooseSchema.Types.ObjectId;
  name?: string;
  hobbies?: Hobby[];
}
