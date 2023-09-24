import { Injectable } from '@nestjs/common';

@Injectable()
export class AntenService {
  getHello(): string {
    return 'Hello World!';
  }
}
