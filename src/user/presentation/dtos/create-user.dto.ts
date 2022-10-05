import {
  IsEnum,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserAddressEntity } from 'src/user/entities/user-address.entity';
import { UserContactEntity } from 'src/user/entities/user-contact.entity';
import { UserRoleEnum } from 'src/user/entities/user-role.enum';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too week',
  })
  password: string;

  @IsEnum(UserRoleEnum)
  role: UserRoleEnum;

  @IsString()
  store_id?: string;

  contacts: UserContactEntity[];
  address: UserAddressEntity[];
}
