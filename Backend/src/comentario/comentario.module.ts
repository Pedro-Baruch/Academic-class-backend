import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { ComentarioController } from './comentario.controller';
import { Comentario } from './comentario.entity';
import { ComentarioService } from './shared/comentario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario]), UserModule],
  controllers: [ComentarioController],
  providers: [ComentarioService],
  exports: [ComentarioService],
})
export class ComentarioModule {}
