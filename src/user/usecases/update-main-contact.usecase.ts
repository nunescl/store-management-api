import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../infra/user.repository';

@Injectable()
export class UpdateMainContactService {
  constructor(private usersRepository: UsersRepository) {}

  async updateMainContact(userId: string, contactId: string): Promise<any> {
    return await this.usersRepository.updateMainContact(userId, contactId);
  }
}
