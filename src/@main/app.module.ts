import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from '../config/data-source.provider';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      dataSourceFactory: async () => {
        const databaseProviders = await dataSource.initialize();
        return databaseProviders;
      },
      useFactory: () => ({}),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
