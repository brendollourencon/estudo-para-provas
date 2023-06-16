import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { AnswersDto } from './answers.dto';

export class CreateUpdateQuestionDto {
  @IsOptional()
  @IsString()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  tagId: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsNotEmpty()
  answers: AnswersDto[];
}
