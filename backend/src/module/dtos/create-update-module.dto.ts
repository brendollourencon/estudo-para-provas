import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject, IsOptional,
  IsString
} from "class-validator";

export class CreateUpdateModuleDto {

  @IsOptional()
  @IsString()
  id: string

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsNotEmpty()
  tags: Tag[];
}

class Tag {
  @IsObject()
  @IsNotEmpty()
  tag: {
    id: number,
    name: string
  };

  @IsNumber()
  @IsNotEmpty()
  percent: number;
}
