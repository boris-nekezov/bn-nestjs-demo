import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// 01
import { EmptyRouteController } from './01-emtpy-route-in-controller/01-emtpy-route-in-controller.controller';
import { EmptyRouteInControllerService } from './01-emtpy-route-in-controller/01-emtpy-route-in-controller.service';
// 02
import { PathInGetDecoratorController } from './02-path-in-get-decorator/02-path-in-get-decorator.controller';
import { PathInGetDecoratorService } from './02-path-in-get-decorator/02-path-in-get-decorator.service';
// 03
import { PathBothInControllerAndGetController } from './03-path-both-in-controller-and-get/03-path-both-in-controller-and-get.controller';
import { PathBothInControllerAndGetService } from './03-path-both-in-controller-and-get/03-path-both-in-controller-and-get.service';
// 04
import { ModuleLevelFirstModule } from './04-module-level-1/04-module-level-1.module';
// 05
import { HeaderDecoratorController } from './05-header-decorator/05-header-decorator.controller';


@Module({
  imports: [ModuleLevelFirstModule],
  controllers: [
    AppController, 
    EmptyRouteController,
    PathInGetDecoratorController,
    PathBothInControllerAndGetController,
    HeaderDecoratorController,

  ],
  providers: [
    AppService, 
    EmptyRouteInControllerService,
    PathInGetDecoratorService,
    PathBothInControllerAndGetService,
  ],
})
export class AppModule {}
