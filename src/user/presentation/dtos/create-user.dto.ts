import { UserAddressEntity } from 'src/user/entities/user-address.entity';
import { UserContactEntity } from 'src/user/entities/user-contact.entity';
import { UserRoleEnum } from 'src/user/entities/user-role.enum';

export class CreateUserDto {
  username: string;
  password: string;
  role: UserRoleEnum;
  store_id?: string;
  contacts: UserContactEntity[];
  address: UserAddressEntity[];
}
