import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';
import { CreateUpdateTagDto } from './dtos/create-update-tag.dto';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async getAll() {
    return this.tagRepository.find();
  }

  async getByid(id: string) {
    return await this.tagRepository.findOneBy({ id: parseInt(id) });
  }

  async create(createUpdateTagDto: CreateUpdateTagDto) {
    return this.tagRepository.save({
      name: createUpdateTagDto.name,
      description: createUpdateTagDto.description,
    });
  }

  async update(createUpdateTagDto: CreateUpdateTagDto) {
    return this.tagRepository.save({
      id: parseInt(createUpdateTagDto.id),
      name: createUpdateTagDto.name,
      description: createUpdateTagDto.description,
    });
  }

  async delete(id: string) {
    return this.tagRepository.delete(parseInt(id));
  }
}
