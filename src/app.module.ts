/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9qru2.mongodb.net/nest-todo-app`,
    ),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
