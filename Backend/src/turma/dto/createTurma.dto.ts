import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTurmaDto {
  @IsNotEmpty()
  nome_turma: string;

  @IsString()
  descricao: string;

  @IsBoolean()
  status: boolean;

  @IsNotEmpty()
  userId: string;
}
