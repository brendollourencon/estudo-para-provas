import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateUpdateQuestionDto } from './dtos/create-update-question.dto';
import { Answers } from '../answers/answers.entity';
import { Module } from '../module/module.entity';
import * as dadosProva1 from '../imports/prova1';
import { Tag } from '../tag/tag.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Module)
    private moduleRepository: Repository<Module>,
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
    @InjectRepository(Answers)
    private answersRepository: Repository<Answers>,
    private dataSource: DataSource,
  ) {}

  async getAll() {
    return await this.questionRepository.find();
  }

  async getById(id: string) {
    return await this.questionRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.tag', 't')
      .leftJoinAndSelect('q.answers', 'a')
      .where('q.id=:id', { id })
      .getOne();
  }

  async all(moduleId: number) {
    return await this.questionRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.tag', 't')
      .leftJoinAndSelect('q.answers', 'a')
      .getMany();
  }

  async create(createUpdateQuestionDto: CreateUpdateQuestionDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const question = new Question();
      question.tagId = createUpdateQuestionDto.tagId;
      question.description = createUpdateQuestionDto.description;

      const newQuestion = await queryRunner.manager.save(question);

      for (let answersDTO of createUpdateQuestionDto.answers) {
        const answers = new Answers();
        answers.questionId = newQuestion.id;
        answers.description = answersDTO.description;
        answers.correct = answersDTO.correct;
        await queryRunner.manager.save(answers);
      }

      await queryRunner.commitTransaction();

      return createUpdateQuestionDto;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async update(createUpdateQuestionDto: CreateUpdateQuestionDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const question = await this.questionRepository.findOneBy({
        id: parseInt(createUpdateQuestionDto.id),
      });

      question.tagId = createUpdateQuestionDto.tagId;
      question.description = createUpdateQuestionDto.description;

      const newQuestion = await queryRunner.manager.save(question);

      await queryRunner.manager.delete(Answers, {
        questionId: parseInt(createUpdateQuestionDto.id),
      });

      for (let answersDTO of createUpdateQuestionDto.answers) {
        const answers = new Answers();
        answers.questionId = newQuestion.id;
        answers.description = answersDTO.description;
        answers.correct = answersDTO.correct;
        await queryRunner.manager.save(answers);
      }

      await queryRunner.commitTransaction();

      return createUpdateQuestionDto;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async delete(id: string) {
    return this.questionRepository.delete(parseInt(id));
  }

  async import() {
    const { prova1 } = dadosProva1;

    for (let i = 0; i < prova1.length; i++) {
      console.log('Percorrendo pergunta ' + i + 1);
      const dataQuestionquestion: any = prova1[i];
      const tag = await this.tagRepository.findOneBy({
        name: dataQuestionquestion.tag,
      });

      if (!tag) {
        console.log(`Pergunta ${i + 1} ignorada, tag não encontrada`);
        continue;
      }

      const question = await this.questionRepository.save({
        description: dataQuestionquestion.description,
        tagId: tag.id,
      });

      for (let j = 0; j < dataQuestionquestion.answers.length; j++) {
        const awnswer: any = dataQuestionquestion.answers[j];

        await this.answersRepository.save({
          description: awnswer.description,
          correct: awnswer.correct,
          questionId: question.id
        });
      }
    }

    return 'Prova importada com sucesso!';
  }
}
