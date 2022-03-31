import { Controller, Get } from '@nestjs/common';
import { EmptyRouteInControllerService } from './01-emtpy-route-in-controller.service';

@Controller() // http://localhost:3000/ we can make this to handle requests root domain
export class EmptyRouteController {
  constructor(private readonly emptyRouteInControllerService: EmptyRouteInControllerService) {}

  @Get()
  getMessage(): string {
    return this.emptyRouteInControllerService.getMessage();
  }
}