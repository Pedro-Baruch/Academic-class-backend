import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { PostagemService } from './shared/shared.service';

@Controller('postagem')
export class PostagemController {
    constructor(private readonly postagemService: PostagemService) {}

    @Get()
    async index(){
        return await this.postagemService.findALL();
    }

    @Post()
    async create(@Body() body){
        return await this.postagemService.create(body);
    }

    @Get(':id')
    async show(@Param('id', new ParseUUIDPipe()) id: string){
        return await this.postagemService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id', new ParseUUIDPipe()) id:string,
        @Body() body,
    ){
        return await this.postagemService.update(id,body);
    }

    @Delete(':id')
    @HttpCode(204)
    async destroy (@Param('id', new ParseUUIDPipe()) id: string){
        await this.postagemService.deleteById(id);
    }
}
