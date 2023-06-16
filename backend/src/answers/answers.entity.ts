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

@Entity('answers')
export class Answers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    questionId: number

    @Column()
    description: string

    @Column()
    correct: boolean

    @CreateDateColumn()
    created_at;

    @UpdateDateColumn()
    updated_at;

    @DeleteDateColumn()
    deleted_at;

    @ManyToOne(() => Question, (question) => question.answers)
    question: Question

}