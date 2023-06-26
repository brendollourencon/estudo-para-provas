import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Module } from '../module/module.entity';
import { Tag } from '../tag/tag.entity';
import { Answers } from '../answers/answers.entity';
import { JoinColumn } from 'typeorm';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tagId: number;

  @Column('text')
  description: string;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;

  @DeleteDateColumn()
  deleted_at;

  @OneToMany(() => Answers, (answers) => answers.question)
  answers: Answers;

  @OneToOne(() => Tag, (tag) => tag)
  @JoinColumn()
  tag: Tag;
}
