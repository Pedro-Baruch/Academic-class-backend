import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Turma{
    @PrimaryGeneratedColumn('uuid')
    turma_id: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    nome_turma: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    descricao: string;

    @Column({ nullable: false, name: 'is_active' ,default: true})
    status: boolean;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at'})
    updateAt: string;

    @JoinColumn({
        name: 'user_id'
    })
    @ManyToMany(() => User)
    user_id: User;
}