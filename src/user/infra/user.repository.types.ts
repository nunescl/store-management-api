import { UserContactEntity } from '../entities/user-contact.entity';
import { UserContactEnum } from '../entities/user-contact.enum';
import { UserRoleEnum } from '../entities/user-role.enum';

export type SaveUser = {
  username: string;
  password: string;
  role: UserRoleEnum;
  store_id?: string;
  contacts: UserContactEntity[];
};

export type SaveUserContact = {
  contact_type: UserContactEnum;
  contact_field: string;
  is_main: boolean;
  user_id: string;
};
