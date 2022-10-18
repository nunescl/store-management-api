import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ProductPriceEntity } from '../entities/product-price.entity';
import { ProductVariationEntity } from '../entities/product-variation.entity';
import { ProductEntity } from '../entities/product.entity';
import {
  SaveProduct,
  SaveProductPrices,
  SaveProductVariation,
} from './product.repository.types';

@Injectable()
export class ProductRepository {
  private productRepo: Repository<ProductEntity>;
  private variationProductRepo: Repository<ProductVariationEntity>;
  private priceProductRepo: Repository<ProductPriceEntity>;

  constructor(private dataSource: DataSource) {
    this.productRepo = dataSource.getRepository(ProductEntity);
    this.variationProductRepo = dataSource.getRepository(
      ProductVariationEntity,
    );
    this.priceProductRepo = dataSource.getRepository(ProductPriceEntity);
  }

  public async createProduct(product: SaveProduct): Promise<void> {
    await this.productRepo.save(product);
  }

  public async createProductVariation(
    variation: SaveProductVariation,
  ): Promise<SaveProductVariation> {
    try {
      await this.variationProductRepo.save({
        ...variation,
        product: { id: variation.product_id },
      });
    } catch (error) {
      throw new Error(error);
    }

    return variation;
  }

  public async saveManyProductPrices(prices: SaveProductPrices[]) {
    await this.priceProductRepo.insert(
      prices.map((p) =>
        this.priceProductRepo.create({
          wholesale: p.wholesale,
          retail: p.retail,
          product: { id: p.id },
        }),
      ),
    );
  }
}
