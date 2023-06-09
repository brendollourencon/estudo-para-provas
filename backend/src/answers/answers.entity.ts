import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne
} from "typeorm";

import { Question } from "../question/question.entity";

@Entity()
export class Answers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string

    @Column()
    correct: string

    @CreateDateColumn()
    created_at;

    @UpdateDateColumn()
    updated_at;

    @DeleteDateColumn()
    deleted_at;

    @ManyToOne(() => Question, (question) => question.answers)
    question: Question

}