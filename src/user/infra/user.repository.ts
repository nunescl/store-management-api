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

  public async findUser(username: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { username } });
    return user;
  }

  //contacts

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
    user: Partial<UserEntity>,
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

  public async updateMainContact(
    userId: string,
    contact: string,
  ): Promise<UserContactEntity[]> {
    const allUserContacts = await this.findUserContacts({
      id: userId,
    });
    const promises = allUserContacts.map(async (userContact) => {
      userContact.is_main = false;
      if (userContact.id === contact) {
        userContact.is_main = true;
      }
      return this.contactRepo.update(userContact.id, userContact);
    });

    await Promise.all(promises);
    return allUserContacts;
  }

  //address

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

  public async findUserAddress(
    user: Partial<UserEntity>,
  ): Promise<UserAddressEntity[]> {
    const query = this.addressRepo.createQueryBuilder('address');
    query.where({ user });

    try {
      const address = await query.getMany();
      return address;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async updateMainAddress(
    userId: string,
    address: string,
  ): Promise<UserAddressEntity[]> {
    const allUserAddress = await this.findUserAddress({ id: userId });
    const promises = allUserAddress.map(async (userAddress) => {
      userAddress.is_main = false;
      if (userAddress.id === address) {
        userAddress.is_main = true;
      }
      return this.addressRepo.update(userAddress.id, userAddress);
    });
    await Promise.all(promises);
    return allUserAddress;
  }
}
