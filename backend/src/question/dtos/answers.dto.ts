import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AnswersDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  correct: boolean;
}
