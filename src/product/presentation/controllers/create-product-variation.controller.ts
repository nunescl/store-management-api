import { Controller, Post, Body } from '@nestjs/common';
import { CreateProductVariationService } from 'src/product/usecases/create-product-variation.usecase';
import { CreateProductVariationDto } from '../dtos/create-product-variation.dto';

@Controller('product')
export class CreateProductVariationController {
  constructor(
    private createProductVariationService: CreateProductVariationService,
  ) {}

  @Post('/createvariation')
  createProductVariation(
    @Body() productVariationDto: CreateProductVariationDto,
  ): Promise<CreateProductVariationDto> {
    return this.createProductVariationService.createProductVariation(
      productVariationDto,
    );
  }
}
