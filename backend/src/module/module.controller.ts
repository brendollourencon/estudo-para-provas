import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ModuleService } from './module.service';
import { CreateModuleDto } from './dtos/create-module.dto';

@Controller('module')
export class ModuleController {
  constructor(private moduleService: ModuleService) {}
  @Get()
  async getAllModules() {
    return this.moduleService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.moduleService.getById(id);
  }

  @Post()
  async create(@Body() createModuleDto: CreateModuleDto) {
    return this.moduleService.create(createModuleDto);
  }
}
