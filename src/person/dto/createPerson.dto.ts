import { Person } from "./person.dto";

export class CreatePersonDto extends Person {
    createdAt: Date;
  }