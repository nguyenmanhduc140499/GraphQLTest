import { Hobby } from '../../hobby/dto/hobby.dto';
import { Schema as MongooseSchema } from 'mongoose';

export class Person {
  _id?: MongooseSchema.Types.ObjectId;
  name?: string;
  hobbies?: Hobby[];
}
