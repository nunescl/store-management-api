import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { JwtWsAuthGuard } from 'src/user/infra/jwt-ws-auth.guard';
import { GetUserAddressService } from 'src/user/usecases/get-user-address.usecase';

@Controller('user')
@UseGuards(JwtWsAuthGuard)
export class GetUserAddressController {
  constructor(private getUserAddressService: GetUserAddressService) {}

  @Get('/address/:user_id')
  getUserAddress(@Param('user_id') user: UserEntity) {
    return this.getUserAddressService.getUserAddress(user);
  }
}
