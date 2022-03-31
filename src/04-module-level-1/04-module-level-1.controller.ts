import { Controller, Get } from '@nestjs/common';
import { ModuleLevelFirstService } from './04-module-level-1.service';

@Controller('module-lv-1') // http://localhost:3000/module-lv-1
export class ModuleLevelFirstController {
  constructor(private readonly moduleLevelFirstService: ModuleLevelFirstService) {}

  @Get()
  getMessage(): string {
    return this.moduleLevelFirstService.getMessage();
  }
}