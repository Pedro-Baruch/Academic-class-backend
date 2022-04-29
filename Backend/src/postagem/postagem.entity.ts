import { Turma } from 'src/turma/turma.entity';
import { User } from 'src/user/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

    @JoinColumn({
        name: 'turma_id',
    })
    @ManyToMany(() => Turma)
    turma_id: Turma;

    @JoinColumn({
        name: 'user_id'
    })
    @ManyToMany(() => User)
    user_id: User;
}