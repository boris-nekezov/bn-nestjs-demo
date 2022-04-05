import { Injectable } from '@nestjs/common';

import { CarsApiModel } from './06-cars-api.model';

@Injectable()
export class CarsApiService {
  cars: CarsApiModel[] = [];

  addCar(
    brand: string,
    model: string,
    generation: string,
    Modification: string,
    startOfProduction: number,
    endOfProduction: number,
    powertrainArchitecture: string, 
    bodyType: string,
    seats: number,
    door: number,
    accelerationZeroToHundredKmH: string,
  ) {
    const carId = `${Math.random() + Date.now()}`;
    const newCar = new CarsApiModel(
      carId,
      brand,
      model,
      generation,
      Modification,
      startOfProduction,
      endOfProduction,
      powertrainArchitecture, 
      bodyType,
      seats,
      door,
      accelerationZeroToHundredKmH,
      );

    this.cars.push(newCar);
    return carId;
  }
}
