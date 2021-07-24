import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  // 값이  empty(||null||undefined)일지라도 유효성 검사를 무시한다.
  @IsOptional()
  //   각 항 목을 하나씩 검사하는 옵션
  @IsString({ each: true })
  readonly genres: string[];
}
