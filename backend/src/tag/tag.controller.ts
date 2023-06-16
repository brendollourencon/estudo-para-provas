import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TagService } from './tag.service';
import { CreateUpdateTagDto } from './dtos/create-update-tag.dto';

@Controller('tag')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get()
  async getAll() {
    return this.tagService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.tagService.getByid(id);
  }

  @Post()
  async create(@Body() createUpdateTagDto: CreateUpdateTagDto) {
    return this.tagService.create(createUpdateTagDto);
  }

  @Put()
  async update(@Body() createUpdateTagDto: CreateUpdateTagDto){
    return this.tagService.update(createUpdateTagDto);
  }

  @Delete(':id')
  async delete(@Param('id') id:string){
    return this.tagService.delete(id)
  }
}
