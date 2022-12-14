import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../infra/user.repository';
import { CreateUserAddressDto } from '../presentation/dtos/create-user-address.dto';

@Injectable()
export class CreateUserAddressService {
  constructor(private userRepository: UsersRepository) {}

  async createUserAddress(
    createUserAddressDto: CreateUserAddressDto,
  ): Promise<void> {
    const {
      state,
      city,
      neighborhood,
      street,
      build_number,
      is_main,
      user_id,
    } = createUserAddressDto;
    try {
      await this.userRepository.createUserAddress({
        state,
        city,
        neighborhood,
        street,
        build_number,
        is_main: !!is_main,
        user_id,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
