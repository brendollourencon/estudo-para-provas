import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { AttempHistory } from './attemp-history.entity';
import { AttempHistoryQuestion } from './attemp-history-question.entity';
import { Question } from '../question/question.entity';
import { User } from '../user/user.entity';
import { QuestionService } from '../question/question.service';
import { CreateUpdateAttempHistoryDto } from './dtos/create-update-attemp-history.dto';

@Injectable()
export class AttempHistoryService {
  constructor(
    @InjectRepository(AttempHistory)
    private attempHistoryRepository: Repository<AttempHistory>,
    @InjectRepository(AttempHistoryQuestion)
    private attempHistoryQuestionRepository: Repository<AttempHistoryQuestion>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private dataSource: DataSource,
    private questionService: QuestionService,
  ) {}

  async getAll() {
    return await this.attempHistoryRepository.find({
      relations: {
        module: true,
      },
    });
  }

  async getById(id: string) {
    const dataReturn = [];

    const attempHistory: any = await this.attempHistoryRepository.findOne({
      where: {
        id: parseInt(id),
      },
      relations: {
        attempHistoryQuestions: true,
        module: true,
      },
    });

    for (let i = 0; i < attempHistory.attempHistoryQuestions.length; i++) {
      const attempHistoryQuestion = attempHistory.attempHistoryQuestions[i];
      const question: any = await this.questionRepository.findOne({
        where: {
          id: attempHistoryQuestion.questionId,
        },
        relations: {
          answers: true,
        },
      });

      const answersSelecteds = question.answers.filter((answer) =>
        attempHistoryQuestion.answersSelecteds.includes(answer.id),
      );

      const answersCorrect = question.answers.filter(
        (answer) => answer.correct,
      );

      dataReturn.push({
        question,
        answersSelecteds,
        answersCorrect,
        correct: attempHistoryQuestion.correct,
      });
    }

    return {
      module: attempHistory.module,
      hitPercentage: attempHistory.hitPercentage,
      data: dataReturn,
    };
  }

  async all(moduleId: number) {
    return this.attempHistoryRepository.find();
  }

  async create(
    user: any,
    createUpdateAttempHistoryDto: CreateUpdateAttempHistoryDto,
  ) {
    let feedback = [];

    for (
      let i = 0;
      i < createUpdateAttempHistoryDto.answeredQuestions.length;
      i++
    ) {
      const { questionId, answers } =
        createUpdateAttempHistoryDto.answeredQuestions[i];

      const question: any = await this.questionService.getById(
        questionId.toString(),
      );

      const answersCorrect = question.answers.filter(
        (answer) => answer.correct,
      );

      if (answersCorrect.length !== answers.length) {
        feedback.push({
          question,
          description: question.description,
          correct: false,
          answersSelecteds: answers,
          answersCorrect,
        });
        continue;
      }

      let itsCorrect = true;
      for (let j = 0; j < answersCorrect.length; j++) {
        if (!answers.includes(answersCorrect[j].id)) {
          itsCorrect = false;
          break;
        }
      }

      if (!itsCorrect) {
        feedback.push({
          question,
          description: question.description,
          correct: false,
          answersSelecteds: answers,
          answersCorrect,
        });
        continue;
      }

      feedback.push({
        question,
        description: question.description,
        correct: true,
        answersSelecteds: answers,
        answersCorrect,
      });
    }

    const hits = feedback.filter((data) => data.correct);
    const hitPercent =
      (hits.length * 100) /
      createUpdateAttempHistoryDto.answeredQuestions.length;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const dataUser = await this.userRepository.findOneBy({
        email: user.email,
      });
      const attempHistory = new AttempHistory();

      attempHistory.moduleId = parseInt(createUpdateAttempHistoryDto.moduleId);
      attempHistory.userId = dataUser.id;
      attempHistory.hitPercentage = hitPercent;

      const newAttempHistory = await queryRunner.manager.save(attempHistory);

      for (let dataFeedback of feedback) {
        const attempHistoryQuestion = new AttempHistoryQuestion();

        attempHistoryQuestion.attempHistoryId = newAttempHistory.id;
        attempHistoryQuestion.questionId = dataFeedback.question.id;
        attempHistoryQuestion.answersSelecteds = dataFeedback.answersSelecteds;
        attempHistoryQuestion.correct = dataFeedback.correct;
        await queryRunner.manager.save(attempHistoryQuestion);
      }

      await queryRunner.commitTransaction();

      return newAttempHistory;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async delete(id: string) {
    return this.attempHistoryRepository.delete(parseInt(id));
  }
}
