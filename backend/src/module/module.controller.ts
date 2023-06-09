import { Body, Controller, Get, Post } from '@nestjs/common';
import { ModuleService } from './module.service';
import { CreateModuleDto } from './dtos/create-module.dto';
@Controller('module')
export class ModuleController {
  constructor(private moduleService: ModuleService) {}
  @Get()
  async getAllModules() {
    return this.moduleService.getAll();
  }

  @Post()
  async create(@Body() createModuleDto: CreateModuleDto) {
    return this.moduleService.create(createModuleDto);
  }
}
