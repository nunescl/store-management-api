import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../infra/product.repository';
import { CreateProductVariationDto } from '../presentation/dtos/create-product-variation.dto';

@Injectable()
export class CreateProductVariationService {
  constructor(private productRepository: ProductRepository) {}

  async createProductVariation(
    createProductVariationDto: CreateProductVariationDto,
  ): Promise<CreateProductVariationDto> {
    try {
      await this.productRepository.createProductVariation(
        createProductVariationDto,
      );
    } catch (error) {
      throw new Error(error);
    }

    return createProductVariationDto;
  }
}
