import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
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
  percentTag: string;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;

  @DeleteDateColumn()
  deleted_at;

  @OneToOne(() => Module, (module) => module)
  @JoinColumn()
  module: Module;

  @OneToOne(() => Tag, (tag) => tag)
  @JoinColumn()
  tag: Tag;
}
