import { IsNotEmpty, IsString } from "class-validator";

export class CreateComentarioDto {
    @IsNotEmpty()
    @IsString()
    comentario: string

    @IsNotEmpty()
    userId: string

}