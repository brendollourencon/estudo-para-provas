import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Module } from './module.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateUpdateModuleDto } from './dtos/create-update-module.dto';
import { ModuleTag } from './module-tag.entity';
import { CreateUpdateQuestionDto } from '../question/dtos/create-update-question.dto';
import { Answers } from '../answers/answers.entity';
import { Question } from '../question/question.entity';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(Module)
    private moduleRepository: Repository<Module>,
    @InjectRepository(ModuleTag)
    private moduleTagRepository: Repository<ModuleTag>,

    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    private dataSource: DataSource,
  ) {}

  async getAll() {
    return this.moduleRepository.find();
  }

  async getById(id: string) {
    return await this.moduleRepository
      .createQueryBuilder('m')
      .leftJoinAndSelect('m.moduleTags', 'mt')
      .leftJoinAndSelect('mt.tag', 't')
      .where('m.id=:id', { id })
      .getOne();
  }

  async create(createUpdateModuleDto: CreateUpdateModuleDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const module = new Module();
      module.name = createUpdateModuleDto.name;
      module.description = createUpdateModuleDto.description;
      module.quantityQuestions = createUpdateModuleDto.quantityQuestions;

      const newModule = await queryRunner.manager.save(module);

      for (let info of createUpdateModuleDto.tags) {
        const moduleTag = new ModuleTag();
        moduleTag.moduleId = newModule.id;
        moduleTag.tagId = info.tag.id;
        moduleTag.percentTag = info.percent;
        await queryRunner.manager.save(moduleTag);
      }

      await queryRunner.commitTransaction();

      return createUpdateModuleDto;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async update(createUpdateModuleDto: CreateUpdateModuleDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const module = await this.moduleRepository.findOneBy({
        id: parseInt(createUpdateModuleDto.id),
      });

      module.name = createUpdateModuleDto.name;
      module.description = createUpdateModuleDto.description;
      module.quantityQuestions = createUpdateModuleDto.quantityQuestions;

      await queryRunner.manager.save(module);

      await queryRunner.manager.delete(ModuleTag, {
        moduleId: parseInt(createUpdateModuleDto.id),
      });

      for (let info of createUpdateModuleDto.tags) {
        const moduleTag = new ModuleTag();
        moduleTag.moduleId = module.id;
        moduleTag.tagId = info.tag.id;
        moduleTag.percentTag = info.percent;
        await queryRunner.manager.save(moduleTag);
      }

      await queryRunner.commitTransaction();

      return createUpdateModuleDto;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async simulate(id: string) {
    const module = await this.getById(id);
    let questions = [];

    for (let i = 0; i < module.moduleTags.length; i++) {
      const moduleTag = module.moduleTags[i];
      const qtyQuestionTag =
        (moduleTag.percentTag * module.quantityQuestions) / 100;

      let questionsTag = await this.questionRepository.find({
        relations: {
          answers: true,
        },
        where: {
          tagId: moduleTag.tagId,
        },
        take: qtyQuestionTag,
      });

      questions = questions.concat(questionsTag);
    }

    return {
      module,
      questions,
    };
  }
}
