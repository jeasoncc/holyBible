import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '212212111!';
  }
  get21(): string {
    return 'jeason!';
  }
}

