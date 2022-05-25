import { Hobby } from './hobby.dto';

export class UpdateHobbyDto extends Hobby {
  completedAt: Date;
}
