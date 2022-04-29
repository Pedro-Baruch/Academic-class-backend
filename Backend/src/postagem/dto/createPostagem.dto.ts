import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostagemDto{
    @IsNotEmpty()
    nomePostagem: string;

    @IsString()
    descricaoPostagem: string;
}