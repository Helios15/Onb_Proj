import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min } from 'class-validator';
import {
  IsInterger,
  OptionalProperty,
} from 'src/_validators/validator.decorator';

export class PaginatedQueryDto {
  @ApiProperty({ default: 1 })
  @IsInterger
  @Min(1)
  page: number;

  @ApiProperty({ default: 10 })
  @IsInterger
  limit: number;
}

export class NewUserDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  age: number;
}

export class GetUsersDTO extends PaginatedQueryDto {
  @OptionalProperty()
  @IsString()
  _id?: string;

  @OptionalProperty()
  @IsString()
  name?: string;

  @OptionalProperty()
  @IsInterger
  age?: number;
}

export class ChangeUserInfoDTO {
  @OptionalProperty()
  @IsString()
  name: string;

  @OptionalProperty()
  @IsInterger
  age: number;
}
