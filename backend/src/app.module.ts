import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleModule } from './module/module.module';
import { QuestionModule } from './question/question.module';
import { TagModule } from './tag/tag.module';
import { AnswersModule } from './answers/answers.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AttempHistoryModule } from './attemp-history/attemp-history.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [`${__dirname}/**/*.entity{.js,.ts}`],
        migrations: [`${__dirname}/migration/{.ts,*.js}`],
        migrationsRun: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    ModuleModule,
    QuestionModule,
    TagModule,
    AnswersModule,
    AuthModule,
    AttempHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
