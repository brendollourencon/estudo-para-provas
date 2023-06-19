import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateAttemtHistoryQuestionsTable1687018941386
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'attempHistoryQuestions',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'answersSelecteds',
            type: 'json',
          },
          {
            name: 'correct',
            type: 'boolean',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.addColumn(
      'attempHistoryQuestions',
      new TableColumn({
        name: 'attempHistoryId',
        type: 'int',
      }),
    );

    await queryRunner.createForeignKey(
      'attempHistoryQuestions',
      new TableForeignKey({
        columnNames: ['attempHistoryId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'attempHistory',
      }),
    );

    await queryRunner.addColumn(
      'attempHistoryQuestions',
      new TableColumn({
        name: 'questionId',
        type: 'int',
      }),
    );

    await queryRunner.createForeignKey(
      'attempHistoryQuestions',
      new TableForeignKey({
        columnNames: ['questionId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'questions',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('attempHistoryQuestions');
  }
}
