import { Hobby } from './hobby.dto';

export class CreateHobbyDto extends Hobby {
  createdAt: Date;
}
