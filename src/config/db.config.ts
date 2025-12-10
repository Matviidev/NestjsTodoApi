import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export type DbConfig = TypeOrmModuleOptions;

export const dbConfig = registerAs('db', (): DbConfig => {
  const isSslDisabled = process.env.DB_SSL === 'false';

  return {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '5432'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: Boolean(process.env.DB_SYNC ?? false),
    ssl: isSslDisabled ? false : true,
    extra: isSslDisabled
      ? {}
      : {
          ssl: {
            rejectUnauthorized: false,
          },
        },
  };
});
