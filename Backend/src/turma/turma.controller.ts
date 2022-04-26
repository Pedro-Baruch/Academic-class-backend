import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTurmaDto } from './dto/createTurma.dto';
import { UpdateTurmaDto } from './dto/updateTurma.dto';
import { TurmaService } from './shared/turma.service';

@Controller('turma')
export class TurmaController {
  constructor(private readonly turmaService: TurmaService) {}

  @Get()
  async index() {
    return await this.turmaService.findALL();
  }

  @Post()
  async create(@Body() body: CreateTurmaDto) {
    return await this.turmaService.create(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.turmaService.findOne(id);
  }

  @Put(':id')
  async upadate(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateTurmaDto,
  ) {
    return await this.turmaService.update(id, body);
  }
}
