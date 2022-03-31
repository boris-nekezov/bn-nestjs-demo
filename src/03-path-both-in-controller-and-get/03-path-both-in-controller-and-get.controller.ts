import { Controller, Get } from '@nestjs/common';
import { PathBothInControllerAndGetService } from './03-path-both-in-controller-and-get.service';

@Controller('path-in-controller')
export class PathBothInControllerAndGetController {
  constructor(private readonly pathBothInControllerAndGetService: PathBothInControllerAndGetService) {}

  @Get('path-in-get') // http://localhost:3000/path-in-controller/path-in-get
  getMessage(): string {
    return this.pathBothInControllerAndGetService.getMessage();
  }
}