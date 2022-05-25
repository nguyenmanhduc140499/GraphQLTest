import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonModule } from './person/person.module';
import { HobbyModule } from './hobby/hobby.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/GraphQL'), PersonModule, HobbyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
