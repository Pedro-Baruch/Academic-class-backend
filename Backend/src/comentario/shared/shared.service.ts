import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentario } from '../comentario.entity';

@Injectable()
export class ComentarioService {
    constructor(
        @InjectRepository(Comentario)
        private readonly comentarioRepository: Repository<Comentario>
    ) {}

    async findALL(){
        return await this.comentarioRepository.find();
    }

    async findOne(comentarioId: string){
        try{
            return await this.comentarioRepository.findOneOrFail({ where: {comentarioId} });
        } catch (error){
            throw new NotFoundException(error.message);
        }
    }

    async create(data) {
        return await this.comentarioRepository.save(this.comentarioRepository.create(data))
    }
    
    async update(comentarioId: string, data){
        const comentario = await this.comentarioRepository.findOne({where: {comentarioId}})
        
        this.comentarioRepository.merge(comentario, data);
        return await this.comentarioRepository.save(data);
    }

    async deleteById(comentarioId: string){
        await this.comentarioRepository.findOne({where: {comentarioId}});
        await this.comentarioRepository.delete(comentarioId);
    }
}