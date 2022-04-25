import { Module } from '@nestjs/common';
import { TurmaController } from './turma.controller';
import { TurmaService } from './shared/turma.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turma } from './turma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Turma])],
  controllers: [TurmaController],
  providers: [TurmaService],
  exports: [TurmaService],
})
export class TurmaModule {}
