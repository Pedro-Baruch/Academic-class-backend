import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateTurmaDto {
  @IsNotEmpty()
  nome_turma: string;

  @IsString()
  descricao: string;

  @IsBoolean()
  status: boolean;
}
