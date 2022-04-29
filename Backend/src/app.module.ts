import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TurmaModule } from './turma/turma.module';
import { AtividadeModule } from './atividade/atividade.module';
import { PostagemModule } from './postagem/postagem.module';
import { ComentarioModule } from './comentario/comentario.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    } as TypeOrmModuleOptions),
    UserModule,
    TurmaModule,
    AtividadeModule,
    PostagemModule,
    ComentarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
