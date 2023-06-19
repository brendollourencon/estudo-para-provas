import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateAttemtHistoryTable1687018933623 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: 'attempHistory',
              columns: [
                  {
                      name: 'id',
                      type: 'int',
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: 'increment',
                  },
                  {
                      name: 'hitPercentage',
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
          'attempHistory',
          new TableColumn({
              name: 'moduleId',
              type: 'int',
          }),
        );

        await queryRunner.createForeignKey(
          'attempHistory',
          new TableForeignKey({
              columnNames: ['moduleId'],
              referencedColumnNames: ['id'],
              referencedTableName: 'modules',
          }),
        );

        await queryRunner.addColumn(
          'attempHistory',
          new TableColumn({
              name: 'userId',
              type: 'int',
          }),
        );

        await queryRunner.createForeignKey(
          'attempHistory',
          new TableForeignKey({
              columnNames: ['userId'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
          }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('attempHistory');
    }

}
