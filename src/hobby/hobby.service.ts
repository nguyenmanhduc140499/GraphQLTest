import { Hobbis, HobbyDocument } from './schema/hobby.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { CreateHobbyDto } from './dto/createHobby.dto';
import { UpdateHobbyDto } from './dto/updateHobby.dto';
import { ListHobbyInput } from './dto/filterHobby.dto';

@Injectable()
export class HobbyService {
  constructor(
    @InjectModel(Hobbis.name) private hobbyModel: Model<HobbyDocument>,
  ) {}
  async findbyFilter(filters: ListHobbyInput) {
    return await this.hobbyModel.find({ ...filters }).exec();
  }
  async findOne(id: MongooseSchema.Types.ObjectId): Promise<HobbyDocument> {
    return await this.hobbyModel.findById(id).exec();
  }
  async create(createHobbyDto: CreateHobbyDto): Promise<HobbyDocument> {
    return await new this.hobbyModel({
      ...createHobbyDto,
      createdAt: new Date(),
    }).save();
  }

  async update(updateHobbyDto: UpdateHobbyDto) {
    return await this.hobbyModel
      .findByIdAndUpdate(updateHobbyDto._id, updateHobbyDto, { new: true })
      .exec();
  }

  async delete(id: MongooseSchema.Types.ObjectId) {
    return await this.hobbyModel.findByIdAndDelete(id).exec();
  }
}
