import { AppConfig } from './app.config';
import { DbConfig } from './db.config';

export interface ConfigType {
  app: AppConfig;
  db: DbConfig;
}
