import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../infra/product.repository';
import { CreateProductPricesDto } from '../presentation/dtos/create-product-prices.dto';

@Injectable()
export class CreateProductPriceService {
  constructor(private productRepository: ProductRepository) {}

  async createProductPrices(
    createProductPricesDto: CreateProductPricesDto[],
  ): Promise<CreateProductPricesDto> {
    try {
      await this.productRepository.saveManyProductPrices(
        createProductPricesDto,
      );
    } catch (error) {
      throw new Error(error);
    }
    return;
  }
}
