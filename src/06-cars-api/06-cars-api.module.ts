import { Module } from '@nestjs/common';

import { CarsApiController } from './06-cars-api.controller';
import { CarsApiService } from './06-cars-api.service';

@Module({
  controllers: [CarsApiController],
  providers: [CarsApiService],
})
export class ProductsModule {}