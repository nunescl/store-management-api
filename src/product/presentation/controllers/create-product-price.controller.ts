import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { readFileSync, unlink } from 'fs';
import { diskStorage } from 'multer';
import { parse } from 'papaparse';
import { CreateProductPriceService } from 'src/product/usecases/create-product-price.usecase';
import { CreateProductPricesDto } from '../dtos/create-product-prices.dto';

@Controller('product')
export class CreateProductPriceController {
  constructor(private createProductPriceService: CreateProductPriceService) {}

  @Post('/price')
  @UseInterceptors(
    FileInterceptor('file_asset', {
      storage: diskStorage({
        destination: './',
      }),
    }),
  )
  async uploadFile(
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    const csvData = await readFileSync(file.path).toString();
    unlink(file.path, console.log);
    const parsedCsv = parse(csvData, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      transformHeader: (header) => header.toLowerCase(),
    }).data;
    const mappedData: CreateProductPricesDto[] = [];
    parsedCsv.forEach((e) => {
      let count = 0;
      if (e['id']) {
        mappedData.push({
          id: e['id'],
          retail: e['retail'],
          wholesale: e['wholesale'],
        });
        count++;
      }
    });
    return this.createProductPriceService.createProductPrices(mappedData);
  }
}
