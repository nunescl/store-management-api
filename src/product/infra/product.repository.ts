import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ProductPriceEntity } from '../entities/product-price.entity';
import { ProductVariationEntity } from '../entities/product-variation.entity';
import { ProductEntity } from '../entities/product.entity';
import { SaveProduct } from './product.repository.types';

@Injectable()
export class ProductRepository {
  private productRepo: Repository<ProductEntity>;
  // private priceProductRepo: Repository<ProductVariationEntity>;
  // private variationProductRepo: Repository<ProductPriceEntity>;

  constructor(private dataSource: DataSource) {
    this.productRepo = dataSource.getRepository(ProductEntity);
    // this.priceProductRepo = dataSource.getRepository(ProductVariationEntity);
    // this.variationProductRepo = dataSource.getRepository(ProductPriceEntity);
  }

  public async createProduct(product: SaveProduct): Promise<void> {
    await this.productRepo.save(product);
  }
}
