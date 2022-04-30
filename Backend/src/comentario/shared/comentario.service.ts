import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/shared/user.service';
import { Repository } from 'typeorm';
import { Comentario } from '../comentario.entity';
import { CreateComentarioDto } from '../dto/createComentario.dto';

@Injectable()
export class ComentarioService {
    constructor(
        @InjectRepository(Comentario)
        private readonly comentarioRepository: Repository<Comentario>,
        private readonly userService: UserService
    ) {}

    async findAllComentarios(): Promise<Comentario[]>{
        return await this.comentarioRepository.find();
    }

    async findComentarioById(comentarioId: string): Promise<Comentario>{
        const comentario = await this.comentarioRepository.findOne({where: { comentarioId }});
        if(!comentario) {
            throw new NotFoundException('Postagem não encontrada');
        }
        return comentario
    }

    async createComentario(data: CreateComentarioDto): Promise<Comentario> {
        if(!data.userId){
            throw new BadRequestException('Você deve se identificar!')
        }
          
        const user = await this.userService.findUserById(data.userId)
        if(!user) { 
            throw new BadRequestException('Usuário não encontrado')
        }

        const newComentario = this.comentarioRepository.create({...data, user: user})
        return await this.comentarioRepository.save(newComentario)
    }

    async deleteById(comentarioId: string): Promise<boolean>{
        await this.findComentarioById(comentarioId)
        const deleted = await this.comentarioRepository.delete(comentarioId);
        if (deleted) {
            return true
        }
        return false
    }
}