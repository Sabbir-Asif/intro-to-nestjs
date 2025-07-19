/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsInt()
  age: number;
  @IsString()
  breed: string;
}
