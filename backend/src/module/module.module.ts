import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module as ModuleEntity } from './module.entity';
import { ModuleTag } from './module-tag.entity';
import { Question } from '../question/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ModuleEntity, ModuleTag, Question])],
  providers: [ModuleService],
  controllers: [ModuleController],
})
export class ModuleModule {}
