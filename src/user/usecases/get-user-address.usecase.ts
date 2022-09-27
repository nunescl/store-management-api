import { Injectable } from '@nestjs/common';
import { UserAddressEntity } from '../entities/user-address.entity';
import { UserEntity } from '../entities/user.entity';
import { UsersRepository } from '../infra/user.repository';

@Injectable()
export class GetUserAddressService {
  constructor(private usersRepository: UsersRepository) {}

  async getUserAddress(user: UserEntity): Promise<UserAddressEntity[]> {
    return this.usersRepository.findUserAddress(user);
  }
}
