import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserAddressEntity } from '../entities/user-address.entity';
import { UserContactEntity } from '../entities/user-contact.entity';
import { UserEntity } from '../entities/user.entity';
import { CreateUserContactDto } from '../presentation/dtos/create-user-contact.dto';
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
  }

  public async createUser(user: SaveUser) {
    await this.userRepo.save(user);
  }

  public async createUserContact(userContact: SaveUserContact) {
    const { contact_type, contact_field, is_main, user_id } = userContact;
    const contact = this.contactRepo.create({
      contact_type,
      contact_field,
      is_main,
      user_id,
    });
    await this.contactRepo.save(contact);
    return contact;
  }

  public async createUserAddress(userAddress: SaveUserAdress) {
    await this.addressRepo.save(userAddress);
  }

  public async findUser(username: string) {
    const user = await this.userRepo.findOne({ where: { username } });
    return user;
  }
}
