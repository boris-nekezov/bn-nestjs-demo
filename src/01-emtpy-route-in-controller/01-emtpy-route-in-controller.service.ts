import { Injectable } from '@nestjs/common';

@Injectable()
export class EmptyRouteInControllerService {
  getMessage(): string {
    return `When we don't have anything inside @Controller() brackets we are at main root domain => domain.com/`;
  }
} 