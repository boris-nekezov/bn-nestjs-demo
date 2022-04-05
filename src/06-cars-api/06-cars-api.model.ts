export class CarsApiModel {
  constructor (
    public id: string,
    public brand: string,
    public model: string,
    public generation: string,
    public Modification: string,
    public startOfProduction: number,
    public endOfProduction: number,
    public powertrainArchitecture: string, 
    public bodyType: string,
    public seats: number,
    public door: number,
    public accelerationZeroToHundredKmH: string,
  ) {}
}


