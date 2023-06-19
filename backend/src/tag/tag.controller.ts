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
import { TagService } from './tag.service';
import { CreateUpdateTagDto } from './dtos/create-update-tag.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('tag')
export class TagController {
  constructor(private tagService: TagService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll() {
    return this.tagService.getAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.tagService.getByid(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createUpdateTagDto: CreateUpdateTagDto) {
    return this.tagService.create(createUpdateTagDto);
  }

  @UseGuards(AuthGuard)
  @Put()
  async update(@Body() createUpdateTagDto: CreateUpdateTagDto) {
    return this.tagService.update(createUpdateTagDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tagService.delete(id);
  }
}
