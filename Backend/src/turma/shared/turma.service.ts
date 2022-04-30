import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/shared/user.service';
import { Repository } from 'typeorm';
import { CreateTurmaDto } from '../dto/createTurma.dto';
import { UpdateTurmaDto } from '../dto/updateTurma.dto';
import { Turma } from '../turma.entity';

@Injectable()
export class TurmaService {
  constructor(
    @InjectRepository(Turma)
    private readonly turmaRepository: Repository<Turma>,
    private readonly userService: UserService
  ) {}

  async findAllTurmas(): Promise<Turma[]> {
    return await this.turmaRepository.find();
  }

  async findTurmaById(turma_id: string): Promise<Turma> {
    
    const turma = await this.turmaRepository.findOne({where: {turma_id }});
    if(!turma) {
      throw new NotFoundException('Turma não encontrada');
    }
    return turma
  }

  async createTurma(data: CreateTurmaDto): Promise<Turma> {

    if(!data.userId){
      throw new BadRequestException('Você deve se identificar!')
    }
    
    const user = await this.userService.findUserById(data.userId)
    if(!user) { 
      throw new BadRequestException('Usuário não encontrado')
    }

    const newTurma = this.turmaRepository.create({...data, user: user})

    return await this.turmaRepository.save(newTurma)

  }

  async update(turma_id: string, data: UpdateTurmaDto): Promise<Turma> {
    const turma = await this.findTurmaById(turma_id)

    this.turmaRepository.merge(turma, data);
    return await this.turmaRepository.save(data);
  }
}
