import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async create(data: Partial<Todo>): Promise<Todo> {
    return this.todoModel.create(data);
  }

  async findOne(id: string): Promise<Todo> {
    const todo = await this.todoModel.findById(id).exec();
    if (!todo) {
      throw new NotFoundException('Todo not found.');
    }

    return todo;
  }

  async update(id: string, data: Partial<Todo>): Promise<Todo> {
    const updatedTodo = await this.todoModel
      .findByIdAndUpdate(id, data, {
        new: true,
      })
      .exec();

    if (!updatedTodo) {
      throw new NotFoundException('Updated Todo not found.');
    }
    return updatedTodo;
  }

  async delete(id: string): Promise<void> {
    const result = await this.todoModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Todo not found.');
    }
  }
}
