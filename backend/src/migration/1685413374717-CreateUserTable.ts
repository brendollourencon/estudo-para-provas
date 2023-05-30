import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1685413374717 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE users
             (
                 id  INT PRIMARY KEY AUTO_INCREMENT,
                 name  varchar(255),
                 email varchar(255),
                 password   varchar(255),
                 created_at      DATETIME,
                 updated_at      DATETIME,
                 deleted_at      DATETIME
             )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
