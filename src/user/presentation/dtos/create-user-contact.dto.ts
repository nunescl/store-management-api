import { UserContactEnum } from 'src/user/entities/user-contact.enum';

export class CreateUserContactDto {
  contact_type: UserContactEnum;
  contact_field: string;
  is_main: boolean;
  user_id: string;
}
