import { Module } from '@nestjs/common';
import { ModuleLevelSecondController } from './04-module-level-2.controller';
import { ModuleLevelSecondService } from './04-module-level-2.service';

@Module({
  controllers: [ModuleLevelSecondController],
  providers: [ModuleLevelSecondService],
})

export class ModuleLevelSecondModule {}