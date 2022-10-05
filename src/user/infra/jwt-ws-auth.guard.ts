import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtWsAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(ctx: ExecutionContext): Promise<any> {
    const request = ctx.switchToHttp().getRequest();
    const { authorization } = request.headers;

    if (!authorization) {
      throw new ForbiddenException();
    }

    const decodedToken = this.jwtService.decode(authorization);

    if (!decodedToken) {
      throw new UnauthorizedException('Invalid token');
    }
    return true;
  }
}
