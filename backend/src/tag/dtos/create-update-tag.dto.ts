import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUpdateTagDto {

  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
