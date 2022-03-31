import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleLevelFirstService {
  getMessage(): string {
    return "This is module level first!";
  }
}