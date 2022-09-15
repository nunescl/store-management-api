import { DataSource } from 'typeorm';
import { join } from 'path';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5435,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
  migrations: [join(__dirname, '/migrations/*{.ts,.js}')],
  // namingStrategy:
});
