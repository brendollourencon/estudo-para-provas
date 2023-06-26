import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { Module as ModuleEntity } from '../module/module.entity';
import { Tag } from "../tag/tag.entity";
import { Answers } from "../answers/answers.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Question, ModuleEntity, Tag, Answers])],
  providers: [QuestionService],
  controllers: [QuestionController],
  exports: [QuestionService],
})
export class QuestionModule {}
