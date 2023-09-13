import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import 'dotenv/config';

@Injectable()
export class TokenGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const headers = context.switchToHttp().getRequest().headers;
    if (!headers.token)
        return false;
    return process.env.API_TOKEN === headers.token;
  }
}
