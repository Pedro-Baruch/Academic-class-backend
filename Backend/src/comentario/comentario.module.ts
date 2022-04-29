import { Module } from '@nestjs/common';
import { ComentarioController } from './comentario.controller';
import { SharedService } from './shared/shared.service';

@Module({
  controllers: [ComentarioController],
  providers: [SharedService]
})
export class ComentarioModule {}
