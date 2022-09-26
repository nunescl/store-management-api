import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from 'src/user/usecases/create-user.usecase';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('user')
export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  @Post('/signup')
  createUser(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.createUserService.createUser(createUserDto);
  }
}
