import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comentario {
    @PrimaryGeneratedColumn('uuid')
    comentarioId: string;

    @Column()
    dataDoComentario: Date

    @Column()
    comentario: string

    @ManyToOne( () => User, (user) => user.comentarios)
    user: string
}