import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { PostagemController } from './postagem.controller';
import { Postagem } from './postagem.entity';
import { PostagemService } from './shared/postagem.service';


@Module({
  imports: [TypeOrmModule.forFeature([Postagem]), UserModule],
  controllers: [PostagemController],
  providers: [PostagemService],
  exports: [PostagemService],
})
export class PostagemModule {}
