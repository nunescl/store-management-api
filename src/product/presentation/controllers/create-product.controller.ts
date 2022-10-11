import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductService } from 'src/product/usecases/create-product.usecase';
import { CreateProductDto } from '../dtos/create-product.dto';

@Controller('product')
export class CreateProductController {
  constructor(private createProductService: CreateProductService) {}

  @Post('create')
  createProduct(@Body() createProductDto: CreateProductDto): Promise<void> {
    return this.createProductService.createProduct(createProductDto);
  }
}
