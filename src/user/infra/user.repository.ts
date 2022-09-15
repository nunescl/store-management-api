import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { SaveUser } from './user.repository.types';

@Injectable()
export class UsersRepository {
  private repo: Repository<UserEntity>;
  public async createUser(user: SaveUser) {
    await this.repo.save(user);
  }

  constructor(private dataSource: DataSource) {
    this.repo = dataSource.getRepository(UserEntity);
  }
}
