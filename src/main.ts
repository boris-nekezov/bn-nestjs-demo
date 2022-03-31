import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// The Basics 
// bootstrap function loads the application
// NestFactory tool create nest application

// Controllers
// * Controllers handle requests and send back 
// responses.
// * Controllers should be lean. 
// * The extra functionality should be in 
// service for example

// Providers
// * Providers are extra classes which you can inject
// into controllers

// Modules:
// * Modules tell nest.js which features make up your 
// application
// * You can have multiple modules
// * You can import a module into another module
// * Modules are typically split by features in your app

// Dependency Injection
// constructor(private readonly appService: AppService) {}
// * by adding type ": AppService" nest will be able to 
// find out which type of object should give us

//******************************************************** */

// we are returning string
// return this.appService.getHello();
// it returns the body only instead res.send or res.json()
// nestjs takes care of the other automatically