import { UserRoleEnum } from '../entities/user-role.enum';

export type SaveUser = {
  username: string;
  password: string;
  role: UserRoleEnum;
  store_id?: string;
  contacts: [];
  address: [];
};
