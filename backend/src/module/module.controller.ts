import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ModuleService } from './module.service';
import { CreateUpdateModuleDto } from './dtos/create-update-module.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('module')
export class ModuleController {
  constructor(private moduleService: ModuleService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAllModules() {
    return this.moduleService.getAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.moduleService.getById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createUpdateModuleDto: CreateUpdateModuleDto) {
    return this.moduleService.create(createUpdateModuleDto);
  }

  @UseGuards(AuthGuard)
  @Put()
  async update(@Body() createUpdateModuleDto: CreateUpdateModuleDto) {
    return this.moduleService.update(createUpdateModuleDto);
  }

  @UseGuards(AuthGuard)
  @Get('simulate/:id')
  async simulate(@Param('id') id: string) {
    return this.moduleService.simulate(id);
  }
}
