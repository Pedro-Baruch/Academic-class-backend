import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { TurmaService } from './shared/turma.service';
import { TurmaController } from './turma.controller';
import { Turma } from './turma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Turma]), UserModule],
  controllers: [TurmaController],
  providers: [TurmaService],
  exports: [TurmaService],
})
export class TurmaModule {}
