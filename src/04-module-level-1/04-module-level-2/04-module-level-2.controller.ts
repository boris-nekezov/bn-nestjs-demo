import { Controller, Get } from '@nestjs/common';
import { ModuleLevelSecondService } from './04-module-level-2.service';

@Controller('module-lv-2') // http://localhost:3000/module-lv-2
export class ModuleLevelSecondController {
  constructor(private readonly moduleLevelSecondService: ModuleLevelSecondService) {}

  @Get()
  getMessage(): string {
    return this.moduleLevelSecondService.getMessage();
  }
}