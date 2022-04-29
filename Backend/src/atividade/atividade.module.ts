import { Module } from '@nestjs/common';
import { AtividadeController } from './atividade.controller';
import { SharedService } from './shared/shared.service';

@Module({
  controllers: [AtividadeController],
  providers: [SharedService]
})
export class AtividadeModule {}
