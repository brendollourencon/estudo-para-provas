import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CreateUpdateQuestionDto } from '../question/dtos/create-update-question.dto';
import { AttempHistoryService } from './attemp-history.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateUpdateAttempHistoryDto } from './dtos/create-update-attemp-history.dto';

@Controller('attemp-history')
export class AttempHistoryController {
  constructor(private attempHistoryService: AttempHistoryService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll() {
    return this.attempHistoryService.getAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.attempHistoryService.getById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Request() req,
    @Body() createUpdateAttempHistoryDto: CreateUpdateAttempHistoryDto,
  ) {
    return this.attempHistoryService.create(
      req.user,
      createUpdateAttempHistoryDto,
    );
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.attempHistoryService.delete(id);
  }
}
