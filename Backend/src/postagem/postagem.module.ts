import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemController } from './postagem.controller';
import { Postagem } from './postagem.entity';
import { PostagemService } from './shared/postagem.service';


@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  controllers: [PostagemController],
  providers: [PostagemService],
  exports: [PostagemService],
})
export class PostagemModule {}
