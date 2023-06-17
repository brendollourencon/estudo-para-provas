import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ModuleService } from './module.service';
import { CreateUpdateModuleDto } from './dtos/create-update-module.dto';

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
  async create(@Body() createUpdateModuleDto: CreateUpdateModuleDto) {
    return this.moduleService.create(createUpdateModuleDto);
  }

  @Put()
  async update(@Body() createUpdateModuleDto: CreateUpdateModuleDto) {
    return this.moduleService.update(createUpdateModuleDto);
  }
}
