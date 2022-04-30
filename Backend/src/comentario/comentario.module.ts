import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentarioController } from './comentario.controller';
import { Comentario } from './comentario.entity';
import { ComentarioService } from './shared/shared.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario])],
  controllers: [ComentarioController],
  providers: [ComentarioService],
  exports: [ComentarioService],
})
export class ComentarioModule {}
