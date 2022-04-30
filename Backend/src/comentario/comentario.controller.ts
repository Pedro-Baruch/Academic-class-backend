import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { Comentario } from './comentario.entity';
import { CreateComentarioDto } from './dto/createComentario.dto';
import { ComentarioService } from './shared/comentario.service';


@Controller('comentario')
export class ComentarioController {
    constructor(private readonly comentarioService: ComentarioService) {}

    @Get()
    async findAll(): Promise<Comentario[]>{
        return await this.comentarioService.findAllComentarios();
    }

    @Post()
    async createComentario(@Body() body: CreateComentarioDto): Promise<Comentario>{
        return await this.comentarioService.createComentario(body);
    }

    @Get(':id')
    async findComentario(@Param('id', new ParseUUIDPipe()) id:string): Promise<Comentario>{
        return await this.comentarioService.findComentarioById(id);
    }

    @Delete(':id')
    @HttpCode(204)
    async destroy (@Param('id', new ParseUUIDPipe()) id: string){
        await this.comentarioService.deleteById(id);
    }
}
