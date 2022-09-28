import { Controller, Param, Patch } from '@nestjs/common';
import { UpdateMainContactService } from 'src/user/usecases/update-main-contact.usecase';

@Controller('user')
export class UpdateMainContactController {
  constructor(private updateMainContactService: UpdateMainContactService) {}

  @Patch('/contacts/:contact_id/user/:user_id/')
  updateMainContact(
    @Param('user_id') user: string,
    @Param('contact_id') contact: string,
  ) {
    return this.updateMainContactService.updateMainContact(user, contact);
  }
}
