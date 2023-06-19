import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';

import { AttempHistory } from './attemp-history.entity';

@Entity('attempHistoryQuestions')
export class AttempHistoryQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  attempHistoryId: number;

  @Column()
  questionId: number;

  @Column({
    type: 'json',
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  answersSelecteds!: Array<{ id: string }>;

  @Column()
  correct: boolean;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;

  @DeleteDateColumn()
  deleted_at;

  @ManyToOne(
    () => AttempHistory,
    (attempHistory) => attempHistory.attempHistoryQuestions,
  )
  attempHistory: AttempHistory;
}
