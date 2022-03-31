import { Injectable } from '@nestjs/common';

@Injectable()
export class PathBothInControllerAndGetService {
  getMessage(): string {
    return `You set to controller path which will be parent path and then also set path to get decorator that will be a child`;
  }
} 