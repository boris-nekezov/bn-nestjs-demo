import { Injectable, NotFoundException } from '@nestjs/common';

import { CarsApiModel } from './06-cars-api.model';

@Injectable()
export class CarsApiService {
  cars: CarsApiModel[] = [];

  addCar(
    brand: string,
    model: string,
    generation: string,
    modification: string,
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
      modification,
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

  getCars() {
    return [...this.cars];
  }

  getCarById(carId: string) {
    const car = this.cars.find(car => car.id === carId);
    if(!car) {
      throw new NotFoundException('Could not find car.');
    }

    return {...car};
  }

  updateCar(
    carId: string,
    brand: string,
    model: string,
    generation: string,
    modification: string,
    startOfProduction: number,
    endOfProduction: number,
    powertrainArchitecture: string, 
    bodyType: string,
    seats: number,
    door: number,
    accelerationZeroToHundredKmH: string,
  ) {
    const [car, index] = this.findCar(carId);
    // we do it this way to not have undefined passed from user for example only title
    const updatedCar = {...car};
    if(brand) {
      updatedCar.brand = brand;
    }
    if(model) {
      updatedCar.model = model;
    }
    if(generation) {
      updatedCar.generation = generation;
    }
    if(modification) {
      updatedCar.modification = modification;
    }
    if(startOfProduction) {
      updatedCar.startOfProduction = startOfProduction;
    }
    if(endOfProduction) {
      updatedCar.endOfProduction = endOfProduction;
    }
    if(powertrainArchitecture) {
      updatedCar.powertrainArchitecture = powertrainArchitecture;
    }
    if(bodyType) {
      updatedCar.bodyType = bodyType;
    }
    if(seats) {
      updatedCar.seats = seats;
    }
    if(door) {
      updatedCar.door = door;
    }
    if(accelerationZeroToHundredKmH) {
      updatedCar.accelerationZeroToHundredKmH = accelerationZeroToHundredKmH;
    }

    this.cars[index] = updatedCar;
  }

  deleteCar(carId: string) {
    const index = this.findCar(carId)[1];
    this.cars.splice(index, 1);
  }

  private findCar(id: string): [CarsApiModel, number] {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    const car = this.cars[carIndex];

    if (!car) {
      throw new NotFoundException('Could not find car.'); // nestjs will auto send res 404 which make sence
    }

    return [car, carIndex];
  }
}
