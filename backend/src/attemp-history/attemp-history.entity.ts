import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany, OneToOne, JoinColumn
} from "typeorm";

import { AttempHistoryQuestion } from "./attemp-history-question.entity";
import { Module } from "../module/module.entity";

@Entity('attempHistory')
export class AttempHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    moduleId: number

    @Column()
    userId: number

    @Column()
    hitPercentage: number

    @CreateDateColumn()
    created_at;

    @UpdateDateColumn()
    updated_at;

    @DeleteDateColumn()
    deleted_at;

    @OneToMany(() => AttempHistoryQuestion, (attempHistoryQuestion) => attempHistoryQuestion.attempHistory)

    attempHistoryQuestions: AttempHistoryQuestion;

    @OneToOne(() => Module, (module) => module)
    @JoinColumn()
    module: Module;
}