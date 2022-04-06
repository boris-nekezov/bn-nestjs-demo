import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CarsApiService } from './06-cars-api.service';

@Controller('cars')
export class CarsApiController {
  constructor(private readonly carsApiService: CarsApiService) {}

  @Post()
  addCar(
    @Body('brand') carBrand: string,
    @Body('model') carModel: string,
    @Body('generation') carGeneration: string,
    @Body('modification') carModification: string,
    @Body('startOfProduction') carStartOfProduction: number,
    @Body('endOfProduction') carEndOfProduction: number,
    @Body('powertrainArchitecture') carPowertrainArchitecture: string,
    @Body('bodyType') carBodyType: string,
    @Body('seats') carSeats: number,
    @Body('door') carDoor: number,
    @Body('accelerationZeroToHundredKmH') carAccelerationZeroToHundredKmH: string,
  ) {
    const generatedId = this.carsApiService.addCar(
      carBrand,
      carModel,
      carGeneration,
      carModification,
      carStartOfProduction,
      carEndOfProduction,
      carPowertrainArchitecture, 
      carBodyType,
      carSeats,
      carDoor,
      carAccelerationZeroToHundredKmH,
    );
    
    return { id: generatedId}; 
  }

  @Get()
  getAllCars() {
    return this.carsApiService.getCars();
  }

  @Get(':id')
  getCar(@Param('id') prodId: string) {
    return this.carsApiService.getCarById(prodId)
  }
}
