import { Controller, Get, Header } from '@nestjs/common';


@Controller('header-decorator') // http://localhost:3000/header-decorator
export class HeaderDecoratorController {

  @Get()
  // @Header('Content-Type', 'text/html') // uncomment to see result
  getMessage(): {} {
    return { name: 'Borko' }
  }
}

// * We can override default settings from nest.js by using 
// Header decorator
// * Checkout devtools network tab >> 
// headers of the request >> Content-Type: application/json;
// now we can set with Header decorator Content-Type to be 
// text/html