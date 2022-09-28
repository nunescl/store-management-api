import { Injectable } from '@nestjs/common';
import { UserContactEntity } from '../entities/user-contact.entity';
import { UsersRepository } from '../infra/user.repository';

@Injectable()
export class UpdateMainContactService {
  constructor(private usersRepository: UsersRepository) {}

  async updateMainContact(
    userId: string,
    contactId: string,
  ): Promise<UserContactEntity[]> {
    return await this.usersRepository.updateMainContact(userId, contactId);
  }
}
