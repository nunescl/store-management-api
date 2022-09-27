import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserAddressService } from 'src/user/usecases/create-user-address.usecase';
import { CreateUserAddressDto } from '../dtos/create-user-address.dto';

@Controller('user')
export class CreateUserAddressController {
  constructor(private createUserAddressService: CreateUserAddressService) {}

  @Post('/createaddress')
  createUserAddress(
    @Body() createUserAddressDto: CreateUserAddressDto,
  ): Promise<void> {
    return this.createUserAddressService.createUserAddress(
      createUserAddressDto,
    );
  }
}
