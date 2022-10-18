import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../infra/product.repository';
import { CreateProductDto } from '../presentation/dtos/create-product.dto';

@Injectable()
export class CreateProductService {
  constructor(private productRepository: ProductRepository) {}

  async createProduct(createProductDto: CreateProductDto): Promise<void> {
    try {
      await this.productRepository.createProduct(createProductDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}
