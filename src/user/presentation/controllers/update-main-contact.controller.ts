import { Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { UserContactEntity } from 'src/user/entities/user-contact.entity';
import { JwtWsAuthGuard } from 'src/user/infra/jwt-ws-auth.guard';
import { UpdateMainContactService } from 'src/user/usecases/update-main-contact.usecase';

@Controller('user')
@UseGuards(JwtWsAuthGuard)
export class UpdateMainContactController {
  constructor(private updateMainContactService: UpdateMainContactService) {}

  @Patch('/:user_id/contact/:contact_id/')
  updateMainContact(
    @Param('user_id') user: string,
    @Param('contact_id') contact: string,
  ): Promise<UserContactEntity[]> {
    return this.updateMainContactService.updateMainContact(user, contact);
  }
}
