import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostagemDto } from '../dto/createPostagem.dto';
import { UpdatePostagemDto } from '../dto/updatePostagem.dto';
import { Postagem } from '../postagem.entity';

@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private readonly postagemRepository: Repository<Postagem>
    ) {}

    async findAllPostagens(): Promise<Postagem[]>{
        return await this.postagemRepository.find();
    }

    async findPostagemById(postagem_id: string): Promise<Postagem>{
        const postagem = await this.postagemRepository.findOne({where: {postagem_id }});
        if(!postagem) {
            throw new NotFoundException('Postagem não encontrada');
        }
        return postagem
    }

    async create(data: CreatePostagemDto): Promise<Postagem>{
        return await this.postagemRepository.save(this.postagemRepository.create(data));
    }

    async update(postagem_id: string, data: UpdatePostagemDto): Promise<Postagem> {
        const postagem = await this.findPostagemById(postagem_id)

        this.postagemRepository.merge(postagem, data);
        return await this.postagemRepository.save(data);
    }

    async deleteById(postagem_id: string): Promise<boolean>{
        await this.findPostagemById(postagem_id)
        const deleted = await this.postagemRepository.delete(postagem_id);
        if (deleted) {
            return true
        }

        return false
    }
}
