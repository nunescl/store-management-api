import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtWsAuthGuard } from 'src/user/infra/jwt-ws-auth.guard';
import { CreateUserAddressService } from 'src/user/usecases/create-user-address.usecase';
import { CreateUserAddressDto } from '../dtos/create-user-address.dto';

@Controller('user')
@UseGuards(JwtWsAuthGuard)
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
