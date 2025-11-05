import { registerAs } from '@nestjs/config';

export interface AppConfig {
  PORT: number;
}

export const appConfig = registerAs('app', () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
}));
