import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { AtividadeService } from './shared/shared.service';

@Controller('atividade')
export class AtividadeController {
    constructor(private readonly atividadeService: AtividadeService) {}

    @Get()
    async index(){
        return await this.atividadeService.findALL();
    }

    @Post()
    async create(@Body() body){
        return await this.atividadeService.create(body);
    }

    @Get(':id')
    async show(@Param('id', new ParseUUIDPipe()) id: string){
        return await this.atividadeService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id', new ParseUUIDPipe()) id:string,
        @Body() body,
    ){
        return await this.atividadeService.update(id,body);
    }

    @Delete(':id')
    @HttpCode(204)
    async destroy (@Param('id', new ParseUUIDPipe()) id: string){
        await this.atividadeService.deleteById(id);
    }
}
