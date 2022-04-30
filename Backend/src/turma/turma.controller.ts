import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put
} from '@nestjs/common';
import { CreateTurmaDto } from './dto/createTurma.dto';
import { UpdateTurmaDto } from './dto/updateTurma.dto';
import { TurmaService } from './shared/turma.service';
import { Turma } from './turma.entity';

@Controller('turma')
export class TurmaController {
  constructor(private readonly turmaService: TurmaService) {}

  @Get()
  async findAll(): Promise<Turma[]> {
    return await this.turmaService.findAllTurmas();
  }

  @Post()
  async create(@Body() body: CreateTurmaDto): Promise<Turma> {
    return await this.turmaService.createTurma(body);
  }

  @Get(':id')
  async findTurma(@Param('id', new ParseUUIDPipe()) id: string): Promise<Turma> {
    return await this.turmaService.findTurmaById(id);
  }

  @Put(':id')
  async upadate(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateTurmaDto,
  ): Promise<Turma> {
    return await this.turmaService.update(id, body);
  }
}
