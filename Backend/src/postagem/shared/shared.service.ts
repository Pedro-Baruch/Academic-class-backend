import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Postagem } from '../postagem.entity';

@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private readonly postagemRepository: Repository<Postagem>
    ) {}

    async findALL(){
        return await this.postagemRepository.find();
    }

    async findOne(postagem_id: string){
        try{
            return await this.postagemRepository.findOneOrFail({ where: { postagem_id } });
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

    async create(data){
        return await this.postagemRepository.save(this.postagemRepository.create(data));
    }

    async update(postagem_id: string, data){
        const postagem = await this.postagemRepository.findOne({where: {postagem_id}});

        this.postagemRepository.merge(postagem, data);
        return await this.postagemRepository.save(data);
    }

    async deleteById(postagem_id: string){
        await this.postagemRepository.findOne({where: {postagem_id}});
        await this.postagemRepository.delete(postagem_id);
    }
}
