import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserAddressEntity } from '../entities/user-address.entity';
import { UserContactEntity } from '../entities/user-contact.entity';
import { UserEntity } from '../entities/user.entity';
import { SaveUser, SaveUserContact } from './user.repository.types';

@Injectable()
export class UsersRepository {
  private userRepo: Repository<UserEntity>;
  private contactRepo: Repository<UserContactEntity>;
  private addressRepo: Repository<UserAddressEntity>;

  constructor(private dataSource: DataSource) {
    this.userRepo = dataSource.getRepository(UserEntity);
    this.contactRepo = dataSource.getRepository(UserContactEntity);
  }

  public async createUser(user: SaveUser) {
    await this.userRepo.save(user);
  }

  public async createUserContact(
    userContact: SaveUserContact,
  ): Promise<SaveUserContact> {
    console.log(userContact);

    try {
      await this.contactRepo.save({
        ...userContact,
        user: { id: userContact.user_id },
      });
    } catch (error) {
      throw new Error(error);
    }

    return userContact;
  }

  public async findUser(username: string) {
    const user = await this.userRepo.findOne({ where: { username } });
    return user;
  }
}
