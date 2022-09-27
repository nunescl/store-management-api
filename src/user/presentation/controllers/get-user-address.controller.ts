import { Controller, Get, Param } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { GetUserAddressService } from 'src/user/usecases/get-user-address.usecase';

@Controller('user')
export class GetUserAddressController {
  constructor(private getUserAddressService: GetUserAddressService) {}

  @Get('/address/:user_id')
  getUserAddress(@Param('user_id') user: UserEntity) {
    return this.getUserAddressService.getUserAddress(user);
  }
}
