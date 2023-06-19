import { Module } from '@nestjs/common';
import { AttempHistoryController } from './attemp-history.controller';
import { AttempHistoryService } from './attemp-history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttempHistory } from './attemp-history.entity';
import { AttempHistoryQuestion } from './attemp-history-question.entity';
import { Question } from '../question/question.entity';
import { User } from '../user/user.entity';
import { QuestionService } from '../question/question.service';
import { QuestionModule } from '../question/question.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AttempHistory,
      AttempHistoryQuestion,
      Question,
      User,
    ]),
    QuestionModule,
  ],
  controllers: [AttempHistoryController],
  providers: [AttempHistoryService],
})
export class AttempHistoryModule {}
