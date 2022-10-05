import { Injectable } from '@nestjs/common';
import { UserAddressEntity } from '../entities/user-address.entity';
import { UsersRepository } from '../infra/user.repository';

@Injectable()
export class UpdateMainAddressService {
  constructor(private usersRepository: UsersRepository) {}

  async updateMainAddress(
    userId: string,
    addressId: string,
  ): Promise<UserAddressEntity[]> {
    return await this.usersRepository.updateMainAddress(userId, addressId);
  }
}
