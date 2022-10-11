import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductRepository } from './infra/product.repository';
import { CreateProductController } from './presentation/controllers/create-product.controller';
import { CreateProductService } from './usecases/create-product.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository])],
  controllers: [CreateProductController],
  providers: [ProductRepository, CreateProductService],
})
export class ProductModule {}
