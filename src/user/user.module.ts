import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './infra/user.repository';
import { CreateUserController } from './presentation/controllers/create-user.controller';
import { CreateUserService } from './usecases/create-user.usecase';
import { SigninUserService } from './usecases/signin-user.usecase';
import { SigninUserController } from './presentation/controllers/signin-user.controller';
import { CreateUserContactService } from './usecases/create-user-contact.usecase';
import { CreateUserContactController } from './presentation/controllers/create-user-contact.controller';
import { CreateUserAddressController } from './presentation/controllers/create-user-address.controller';
import { CreateUserAddressService } from './usecases/create-user-address.usecase';
import { GetUserContactsController } from './presentation/controllers/get-user-contacts.controller';
import { GetUserContactsService } from './usecases/get-user-contacts.usecase';
import { GetUserAddressController } from './presentation/controllers/get-user-address.controller';
import { GetUserAddressService } from './usecases/get-user-address.usecase';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topSecretPass',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([UsersRepository]),
  ],
  controllers: [
    CreateUserController,
    SigninUserController,
    CreateUserContactController,
    CreateUserAddressController,
    GetUserContactsController,
    GetUserAddressController,
  ],
  providers: [
    CreateUserService,
    SigninUserService,
    CreateUserContactService,
    CreateUserAddressService,
    GetUserContactsService,
    GetUserAddressService,
    UsersRepository,
  ],
})
export class UserModule {}
