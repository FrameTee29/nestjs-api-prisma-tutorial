import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  signup() {
    return { msg: 'I am signup' };
  }

  signin() {
    return { msg: 'I am signin' };
  }
}
