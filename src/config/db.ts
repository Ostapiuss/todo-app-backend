import { DataSource, DataSourceOptions } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import * as entities from '../entity/index.ts';

dotenv.config();

const DB_TYPE = 'postgres';
const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, NODE_ENV } = process.env;

if (!DB_HOST || !DB_PORT || !DB_USER || !DB_PASS || !DB_NAME) {
  // eslint-disable-next-line no-undef, no-console
  console.warn('DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME is not all specified.');
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// eslint-disable-next-line no-undef

export const entitiesList = [...Object.values(entities)];

export const dbConfigOptions: DataSourceOptions = {
  type: DB_TYPE,
  host: DB_HOST,
  port: DB_PORT ? parseInt(DB_PORT) : 5432,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  logging: NODE_ENV !== 'production',
  synchronize: true,
  entities: entitiesList,
  migrations: [__dirname + '/migration/**/*.ts'],
  subscribers: [],
  migrationsTransactionMode: 'each',
};
export const getDBConfig = (dbcOverlay: DataSourceOptions): DataSource => {
  const dbco: DataSourceOptions = {
    ...dbConfigOptions,
    ...dbcOverlay,
  } as DataSourceOptions;
  return new DataSource(dbco);
};
export const dbConfig: DataSource = getDBConfig(dbConfigOptions);
