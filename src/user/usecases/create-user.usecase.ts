import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/presentation/dtos/create-user.dto';
import { UsersRepository } from 'src/user/infra/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}
  async createUser(createUserDto: CreateUserDto): Promise<void> {
    const { username, password, role, contacts, address } = createUserDto;

    try {
      await this.usersRepository.createUser({
        username,
        password,
        role,
        contacts,
        address,
      });
    } catch (error) {
      throw new Error();
    }
  }
}
