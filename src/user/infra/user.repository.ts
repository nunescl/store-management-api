import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserAddressEntity } from '../entities/user-address.entity';
import { UserContactEntity } from '../entities/user-contact.entity';
import { UserEntity } from '../entities/user.entity';
import {
  SaveUser,
  SaveUserAdress,
  SaveUserContact,
} from './user.repository.types';

@Injectable()
export class UsersRepository {
  private userRepo: Repository<UserEntity>;
  private contactRepo: Repository<UserContactEntity>;
  private addressRepo: Repository<UserAddressEntity>;

  constructor(private dataSource: DataSource) {
    this.userRepo = dataSource.getRepository(UserEntity);
    this.contactRepo = dataSource.getRepository(UserContactEntity);
    this.addressRepo = dataSource.getRepository(UserAddressEntity);
  }

  public async createUser(user: SaveUser) {
    await this.userRepo.save(user);
  }

  public async createUserContact(
    userContact: SaveUserContact,
  ): Promise<SaveUserContact> {
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

  public async findUserContacts(
    user: UserEntity,
  ): Promise<UserContactEntity[]> {
    const query = this.contactRepo.createQueryBuilder('contacts');
    query.where({ user });

    try {
      const contacts = await query.getMany();
      return contacts;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async createUserAddress(
    userAddress: SaveUserAdress,
  ): Promise<SaveUserAdress> {
    try {
      await this.addressRepo.save({
        ...userAddress,
        user: { id: userAddress.user_id },
      });
    } catch (error) {
      throw new Error(error);
    }
    return userAddress;
  }

  public async findUserAddress(user: UserEntity): Promise<UserAddressEntity[]> {
    const query = this.addressRepo.createQueryBuilder('address');
    query.where({ user });

    try {
      const address = await query.getMany();
      return address;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findUser(username: string) {
    const user = await this.userRepo.findOne({ where: { username } });
    return user;
  }
}
