import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { SaveUser } from './user.repository.types';

@Injectable()
export class UsersRepository {
  private repo: Repository<UserEntity>;
  constructor(private dataSource: DataSource) {
    this.repo = dataSource.getRepository(UserEntity);
  }

  public async createUser(user: SaveUser) {
    await this.repo.save(user);
  }

  public async findUser(username: string) {
    const user = await this.repo.findOne({ where: { username } });
    return user;
  }
}
