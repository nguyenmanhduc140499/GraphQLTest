import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Person } from './dto/person.dto';
import { PersonSchema } from './schema/person.schema';
import { PersonResolver } from './person.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
  ],
  providers: [PersonResolver],
})
export class PersonModule {}
