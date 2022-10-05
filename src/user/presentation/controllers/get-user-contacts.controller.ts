import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { JwtWsAuthGuard } from 'src/user/infra/jwt-ws-auth.guard';
import { GetUserContactsService } from 'src/user/usecases/get-user-contacts.usecase';

@Controller('user')
@UseGuards(JwtWsAuthGuard)
export class GetUserContactsController {
  constructor(private getUserContactsService: GetUserContactsService) {}

  @Get('/contacts/:user_id')
  getUserContacts(@Param('user_id') user: UserEntity) {
    return this.getUserContactsService.getUserContacts(user);
  }
}
