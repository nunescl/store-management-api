import { Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { UserAddressEntity } from 'src/user/entities/user-address.entity';
import { JwtWsAuthGuard } from 'src/user/infra/jwt-ws-auth.guard';
import { UpdateMainAddressService } from 'src/user/usecases/update-main-address.usecase';

@Controller('user')
@UseGuards(JwtWsAuthGuard)
export class updateMainAddressController {
  constructor(private updateMainAddressService: UpdateMainAddressService) {}

  @Patch('/:user_id/address/:address_id')
  updateMainAddress(
    @Param('user_id') userId: string,
    @Param('address_id') addressId: string,
  ): Promise<UserAddressEntity[]> {
    return this.updateMainAddressService.updateMainAddress(userId, addressId);
  }
}
