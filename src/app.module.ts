import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfig } from './config/app.config';
import { DbConfig, dbConfig } from './config/db.config';
import { validationSchema } from './config/validation.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypedConfigService } from './config/typed-config.service';
import { TaskLabel } from './tasks/task-label.enitity';
import { Task } from './tasks/task.entity';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { authConfig } from './config/auth.config';

@Module({
  imports: [
    TasksModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig, appConfig, authConfig],
      validationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: TypedConfigService) => ({
        ...configService.get<DbConfig>('db'),
        entities: [User, TaskLabel, Task],
      }),
    }),
    UsersModule,
  ],
})
export class AppModule {}
