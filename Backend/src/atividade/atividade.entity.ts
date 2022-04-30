import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Atividade {
    @PrimaryGeneratedColumn('uuid')
    atividadeId: string;

    @Column()
    nota: number;

    @Column()
    dataEntrega: Date;

    @CreateDateColumn()
    CreatedAt: Date;
}