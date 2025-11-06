import { AppConfig } from './app.config';
import { AuthConfig } from './auth.config';
import { DbConfig } from './db.config';

export interface ConfigType {
  app: AppConfig;
  db: DbConfig;
  auth: AuthConfig;
}
