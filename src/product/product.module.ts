import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './infra/product.repository';
import { CreateProductPriceController } from './presentation/controllers/create-product-price.controller';
import { CreateProductVariationController } from './presentation/controllers/create-product-variation.controller';
import { CreateProductController } from './presentation/controllers/create-product.controller';
import { CreateProductPriceService } from './usecases/create-product-price.usecase';
import { CreateProductVariationService } from './usecases/create-product-variation.usecase';
import { CreateProductService } from './usecases/create-product.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository])],
  controllers: [
    CreateProductController,
    CreateProductVariationController,
    CreateProductPriceController,
  ],
  providers: [
    ProductRepository,
    CreateProductService,
    CreateProductVariationService,
    CreateProductPriceService,
  ],
})
export class ProductModule {}
