import { Module } from '@nestjs/common';
import { PostagemController } from './postagem.controller';
import { SharedService } from './shared/shared.service';

@Module({
  controllers: [PostagemController],
  providers: [SharedService]
})
export class PostagemModule {}
