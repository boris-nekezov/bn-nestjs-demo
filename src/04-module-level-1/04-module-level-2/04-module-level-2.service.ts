import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleLevelSecondService {
  getMessage(): string {
    return "This is module level second!";
  }
}