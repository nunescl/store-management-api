import { Controller, Get, Param } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { GetUserContactsService } from 'src/user/usecases/get-user-contacts.usecase';

@Controller('user')
export class GetUserContactsController {
  constructor(private getUserContactsService: GetUserContactsService) {}

  @Get('/contacts/:user_id')
  getUserContacts(@Param('user_id') user: UserEntity) {
    return this.getUserContactsService.getUserContacts(user);
  }
}
