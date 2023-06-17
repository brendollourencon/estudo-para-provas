import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn, ManyToOne
} from "typeorm";
import { Tag } from '../tag/tag.entity';
import { Module } from './module.entity';

@Entity('modulesTags')
export class ModuleTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  moduleId: number;

  @Column()
  tagId: number;

  @Column()
  percentTag: number;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;

  @DeleteDateColumn()
  deleted_at;

  @ManyToOne(() => Module, (module) => module.moduleTags)

  module: Module;

  @OneToOne(() => Tag, (tag) => tag)
  @JoinColumn()
  tag: Tag;
}
