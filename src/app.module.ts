import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'store-management',
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
    }),
    UserModule,
    ProductModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
