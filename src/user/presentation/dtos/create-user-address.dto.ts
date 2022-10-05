import { IsBoolean, IsString } from 'class-validator';

export class CreateUserAddressDto {
  @IsString()
  state: string;

  @IsString()
  city: string;

  @IsString()
  neighborhood: string;

  @IsString()
  street: string;

  @IsString()
  build_number: string;

  @IsBoolean()
  is_main: boolean;

  @IsString()
  user_id: string;
}
