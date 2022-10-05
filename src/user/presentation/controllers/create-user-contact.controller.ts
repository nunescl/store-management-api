import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { JwtWsAuthGuard } from 'src/user/infra/jwt-ws-auth.guard';
import { CreateUserContactService } from 'src/user/usecases/create-user-contact.usecase';
import { CreateUserContactDto } from '../dtos/create-user-contact.dto';

@Controller('user')
@UseGuards(JwtWsAuthGuard)
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
