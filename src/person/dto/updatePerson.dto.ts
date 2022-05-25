import { Person } from './person.dto';

export class UpdatePersonDto extends Person {
  completedAt?: Date;
}
