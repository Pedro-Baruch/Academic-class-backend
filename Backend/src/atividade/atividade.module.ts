import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtividadeController } from './atividade.controller';
import { Atividade } from './atividade.entity';
import { AtividadeService } from './shared/shared.service';

@Module({
  imports: [TypeOrmModule.forFeature([Atividade])],
  controllers: [AtividadeController],
  providers: [AtividadeService],
  exports: [AtividadeService]
})
export class AtividadeModule {}
