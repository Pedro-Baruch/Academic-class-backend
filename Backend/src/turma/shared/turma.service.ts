import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTurmaDto } from '../dto/createTurma.dto';
import { UpdateTurmaDto } from '../dto/updateTurma.dto';
import { Turma } from '../turma.entity';

@Injectable()
export class TurmaService {
  constructor(
    @InjectRepository(Turma)
    private readonly turmaRepository: Repository<Turma>,
  ) {}

  async findALL() {
    return await this.turmaRepository.find();
  }

  async findOne(turma_id: string) {
    try {
      return await this.turmaRepository.findOneOrFail({ where: { turma_id } });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(data: CreateTurmaDto) {
    return await this.turmaRepository.save(this.turmaRepository.create(data));
  }

  async update(turma_id: string, data: UpdateTurmaDto) {
    const turma = await this.turmaRepository.findOne({ where: { turma_id } });

    this.turmaRepository.merge(turma, data);
    return await this.turmaRepository.save(data);
  }
}
