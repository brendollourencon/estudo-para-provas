import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateModuleTagTable1686882446035 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'modulesTags',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'percentTag',
            type: 'int',
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
      'modulesTags',
      new TableColumn({
        name: 'moduleId',
        type: 'int',
      }),
    );

    await queryRunner.createForeignKey(
      'modulesTags',
      new TableForeignKey({
        columnNames: ['moduleId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'modules',
      }),
    );

    await queryRunner.addColumn(
      'modulesTags',
      new TableColumn({
        name: 'tagId',
        type: 'int',
      }),
    );

    await queryRunner.createForeignKey(
      'modulesTags',
      new TableForeignKey({
        columnNames: ['tagId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tags',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
