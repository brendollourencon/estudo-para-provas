import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUpdateAttempHistoryDto {
  @IsString()
  @IsNotEmpty()
  moduleId: string;

  answeredQuestions: AnsweredQuestionsDto[];
}

class AnsweredQuestionsDto {
  @IsNumber()
  @IsNotEmpty()
  questionId: number;

  @IsArray()
  @IsNotEmpty()
  answers: object[];
}
