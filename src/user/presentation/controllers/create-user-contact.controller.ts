import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateUserContactService } from 'src/user/usecases/create-user-contact.usecase';
import { CreateUserContactDto } from '../dtos/create-user-contact.dto';

@Controller('user')
export class CreateUserContactController {
  constructor(private createUserContactService: CreateUserContactService) {}

  @Post('/createcontact')
  createUserContact(
    @Body() createUserContactDto: CreateUserContactDto,
  ): Promise<void> {
    return this.createUserContactService.createUserContact(
      createUserContactDto,
    );
  }
}
