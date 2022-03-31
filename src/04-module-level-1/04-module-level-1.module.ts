import { Module } from '@nestjs/common';
import { ModuleLevelFirstController } from './04-module-level-1.controller';
import { ModuleLevelFirstService } from './04-module-level-1.service';
import { ModuleLevelSecondModule } from './04-module-level-2/04-module-level-2.module';

@Module({
  imports: [ModuleLevelSecondModule],
  controllers: [ModuleLevelFirstController],
  providers: [ModuleLevelFirstService],
})

export class ModuleLevelFirstModule {}