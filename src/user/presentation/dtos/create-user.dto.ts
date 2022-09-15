import { UserRoleEnum } from 'src/user/entities/user-role.enum';

export class CreateUserDto {
  username: string;
  password: string;
  role: UserRoleEnum;
  store_id?: string;
  contacts: [];
  address: [];
}
