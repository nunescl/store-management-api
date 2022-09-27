import { Injectable } from '@nestjs/common';
import { UserContactEntity } from '../entities/user-contact.entity';
import { UserEntity } from '../entities/user.entity';
import { UsersRepository } from '../infra/user.repository';

@Injectable()
export class GetUserContactsService {
  constructor(private usersRepository: UsersRepository) {}

  async getUserContacts(user: UserEntity): Promise<UserContactEntity[]> {
    return this.usersRepository.findUserContacts(user);
  }
}
