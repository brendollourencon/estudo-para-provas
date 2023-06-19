import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateUpdateQuestionDto } from './dtos/create-update-question.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll() {
    return this.questionService.getAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.questionService.getById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createUpdateQuestionDto: CreateUpdateQuestionDto) {
    return this.questionService.create(createUpdateQuestionDto);
  }

  @UseGuards(AuthGuard)
  @Put()
  async update(@Body() createUpdateQuestionDto: CreateUpdateQuestionDto) {
    return this.questionService.update(createUpdateQuestionDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.questionService.delete(id);
  }
}
