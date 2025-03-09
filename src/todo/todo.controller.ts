import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.schema';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() data: Partial<Todo>): Promise<Todo> {
    return this.todoService.create(data);
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Todo>): Promise<Todo> {
    return this.todoService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.todoService.delete(id);
  }
}
