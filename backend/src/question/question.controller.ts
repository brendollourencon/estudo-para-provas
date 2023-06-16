import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateUpdateQuestionDto } from './dtos/create-update-question.dto';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get()
  async getAll() {
    return this.questionService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.questionService.getById(id);
  }

  @Post()
  async create(@Body() createUpdateQuestionDto: CreateUpdateQuestionDto) {
    return this.questionService.create(createUpdateQuestionDto);
  }

  @Put()
  async update(@Body() createUpdateQuestionDto: CreateUpdateQuestionDto) {
    return this.questionService.update(createUpdateQuestionDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.questionService.delete(id);
  }
}
