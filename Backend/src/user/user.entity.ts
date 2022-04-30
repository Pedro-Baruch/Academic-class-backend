import { Postagem } from 'src/postagem/postagem.entity';
import { Turma } from 'src/turma/turma.entity';
import {
  Column,
  CreateDateColumn,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
  
  @OneToMany( () => Turma, (turma) => turma.user)
  turmas: Turma[];

  @OneToMany( () => Postagem, (postagem) => postagem.user)
  posts: Postagem[];
}
