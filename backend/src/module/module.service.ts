import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Module } from './module.entity';
import { Repository } from 'typeorm';
import { CreateModuleDto } from './dtos/create-module.dto';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(Module)
    private modulesRepository: Repository<Module>,
  ) {}

  async getAll() {
    return this.modulesRepository.find();
  }

  async create(createModuleDTO: CreateModuleDto) {
    return this.modulesRepository.save(createModuleDTO);
  }
}
