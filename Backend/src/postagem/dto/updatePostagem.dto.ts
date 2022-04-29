import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePostagemDto{
    @IsNotEmpty()
    nomePostagem: string;

    @IsString()
    descricaoPostagem: string;
}