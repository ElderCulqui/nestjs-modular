import {
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
