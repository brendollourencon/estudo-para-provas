import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
// import { Question } from "../question/question.entity";
import { Tag } from '../tag/tag.entity';
import { JoinTable } from 'typeorm/browser';
import { Module } from './module.entity';

@Entity()
export class ModuleTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  percentInModule: number;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;

  @DeleteDateColumn()
  deleted_at;

  @ManyToOne(() => Module, (module) => module.moduleTags)
  module: Module;

  @ManyToOne(() => Tag, (tag) => tag.moduleTags)
  tag: Tag;
}
