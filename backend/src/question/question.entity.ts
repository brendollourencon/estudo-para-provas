import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne, OneToMany
} from "typeorm";

import { Module } from "../module/module.entity";
import { Tag } from "../tag/tag.entity";
import { Answers } from "../answers/answers.entity";

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string

    @Column()
    status: boolean

    @CreateDateColumn()
    created_at;

    @UpdateDateColumn()
    updated_at;

    @DeleteDateColumn()
    deleted_at;

    @ManyToOne(() => Module, (module) => module.questions)
    module: Module;

    @OneToMany(() => Answers, (answers) => answers.question)
    answers: Answers

    @OneToMany(() => Tag, (tag) => tag)
    tag: Tag;
}