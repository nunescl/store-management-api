import { Body, Controller, Post } from '@nestjs/common';
import { SigninUserService } from 'src/user/usecases/signin-user.usecase';
import { AuthCredentialsDto } from '../dtos/auth-credentials.dto';

@Controller('user')
export class SigninUserController {
  constructor(private signinUserService: SigninUserService) {}

  @Post('/signin')
  createUser(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.signinUserService.signIn(authCredentialsDto);
  }
}
