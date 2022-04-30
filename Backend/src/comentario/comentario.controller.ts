import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { ComentarioService } from './shared/shared.service';


@Controller('comentario')
export class ComentarioController {
    constructor(private readonly comentarioService: ComentarioService) {}

    @Get()
    async index(){
        return await this.comentarioService.findALL();
    }

    @Post()
    async create(@Body() body){
        return await this.comentarioService.create(body);
    }

    @Get(':id')
    async show(@Param('id', new ParseUUIDPipe()) id:string){
        return await this.comentarioService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() body,
    ){
        return await this.comentarioService.update(id,body);
    }

    @Delete(':id')
    @HttpCode(204)
    async destroy (@Param('id', new ParseUUIDPipe()) id: string){
        await this.comentarioService.deleteById(id);
    }
}
