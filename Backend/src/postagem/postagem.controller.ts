import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CreatePostagemDto } from './dto/createPostagem.dto';
import { UpdatePostagemDto } from './dto/updatePostagem.dto';
import { Postagem } from './postagem.entity';
import { PostagemService } from './shared/postagem.service';

@Controller('postagem')
export class PostagemController {
    constructor(private readonly postagemService: PostagemService) {}

    @Get()
    async findAll(): Promise<Postagem[]>{
        return await this.postagemService.findAllPostagens();
    }

    @Post()
    async create(@Body() body: CreatePostagemDto): Promise<Postagem>{
        return await this.postagemService.createPostagem(body);
    }

    @Get(':id')
    async findPostagem(@Param('id', new ParseUUIDPipe()) id: string): Promise<Postagem>{
        return await this.postagemService.findPostagemById(id);
    }

    @Put(':id')
    async update(
        @Param('id', new ParseUUIDPipe()) id:string,
        @Body() body: UpdatePostagemDto,
    ): Promise<Postagem>{
        return await this.postagemService.update(id,body);
    }

    @Delete(':id')
    @HttpCode(204)
    async destroy (@Param('id', new ParseUUIDPipe()) id: string){
        await this.postagemService.deleteById(id);
    }
}
