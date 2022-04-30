import { Atividade } from 'src/atividade/atividade.entity';
import { Comentario } from 'src/comentario/comentario.entity';
import { User } from 'src/user/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Postagem {
    @PrimaryGeneratedColumn('uuid')
    postagem_id: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    nomePostagem: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    descricaoPostagem: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updateAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: Date;

    @ManyToOne( () => User, (User) => User.posts)
    user: User;

    @OneToOne( () => Atividade)
    @JoinColumn()
    atividade?: Atividade

    @ManyToOne( () => Comentario)
    @JoinColumn()
    comentarios: Comentario
}