import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../infra/user.repository';
import { CreateUserContactDto } from '../presentation/dtos/create-user-contact.dto';

@Injectable()
export class CreateUserContactService {
  constructor(private userRepository: UsersRepository) {}

  async createUserContact(
    createUserContactDto: CreateUserContactDto,
  ): Promise<void> {
    const { contact_type, contact_field, is_main, user_id } =
      createUserContactDto;
    try {
      await this.userRepository.createUserContact({
        contact_type,
        contact_field,
        is_main: !!is_main,
        user_id,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
