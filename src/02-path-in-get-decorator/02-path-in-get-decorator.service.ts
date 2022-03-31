import { Injectable } from '@nestjs/common';

@Injectable()
export class PathInGetDecoratorService {
  getMessage(): string {
    return `You can add additional path in get decorator @Get('path-in-get') then if you don't have any other parents path you will see this message when you go to http://localhost:3000/path-in-get`;
  }
} 