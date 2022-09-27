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
  ],
  providers: [
    CreateUserService,
    SigninUserService,
    CreateUserContactService,
    UsersRepository,
  ],
})
export class UserModule {}
