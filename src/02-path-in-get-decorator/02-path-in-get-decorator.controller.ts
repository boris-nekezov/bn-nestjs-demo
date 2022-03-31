import { Controller, Get } from '@nestjs/common';
import { PathInGetDecoratorService } from './02-path-in-get-decorator.service';

@Controller()
export class PathInGetDecoratorController {
  constructor(private readonly pathInGetDecoratorService: PathInGetDecoratorService) {}

  @Get('path-in-get') // http://localhost:3000/path-in-get
  getMessage(): string {
    return this.pathInGetDecoratorService.getMessage();
  }
}