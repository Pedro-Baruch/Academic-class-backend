import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atividade } from '../atividade.entity';

@Injectable()
export class AtividadeService {
    constructor(
        @InjectRepository(Atividade)
        private readonly atividadeRepository: Repository<Atividade>
    ) {}

    async findALL(){
        return await this.atividadeRepository.find();
    }

    async findOne(atividadeId: string){
        try{
            return await this.atividadeRepository.findOneOrFail({ where: { atividadeId } });
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

    async create(data){
        return await this.atividadeRepository.save(this.atividadeRepository.create(data));
    }

    async update(atividadeId: string, data){
        const atividade = await this.atividadeRepository.findOne({where: {atividadeId}});

        this.atividadeRepository.merge(atividade, data);
        return await this.atividadeRepository.save(data);
    }

    async deleteById(atividadeId: string){
        await this.atividadeRepository.findOne({where: {atividadeId}});
        await this.atividadeRepository.delete(atividadeId);
    }
}