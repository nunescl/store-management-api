import { IsBoolean, IsString } from 'class-validator';
import { UserContactEnum } from 'src/user/entities/user-contact.enum';

export class CreateUserContactDto {
  contact_type: UserContactEnum;

  @IsString()
  contact_field: string;

  @IsBoolean()
  is_main: boolean;

  @IsString()
  user_id: string;
}
