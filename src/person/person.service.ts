import { UpdatePersonDto } from './dto/updatePerson.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { Person } from 'src/person/dto/person.dto';
import { PersonDocument } from 'src/person/schema/person.schema';
import { CreatePersonDto } from './dto/createPerson.dto';
import { ListPersonInput } from './dto/filterPerson.dto';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name) private personModel: Model<PersonDocument>,
  ) {}
  async findbyFilter(filters: ListPersonInput) {
    return await this.personModel.find({ ...filters }).exec();
  }
  async findOne(id: MongooseSchema.Types.ObjectId): Promise<PersonDocument> {
    return await this.personModel.findById(id).exec();
  }
  async create(createPersonDto: CreatePersonDto): Promise<PersonDocument> {
    return await new this.personModel({
      ...createPersonDto,
      createdAt: new Date(),
    }).save();
  }

  async update(updatePersonDto: UpdatePersonDto) {
    return await this.personModel
      .findByIdAndUpdate(updatePersonDto._id, updatePersonDto, { new: true })
      .exec();
  }

  async delete(id: MongooseSchema.Types.ObjectId) {
    return await this.personModel.findByIdAndDelete(id).exec();
  }
}
