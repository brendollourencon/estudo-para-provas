import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Question } from '../question/question.entity';
import { ModuleTag } from './moduleTag.entity';

@Entity('modules')
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;

  @DeleteDateColumn()
  deleted_at;

  @OneToMany(() => Question, (question) => question.module)
  questions: Question[];

  @OneToMany(() => ModuleTag, (moduleTags) => moduleTags.module)
  moduleTags: ModuleTag[];
}
