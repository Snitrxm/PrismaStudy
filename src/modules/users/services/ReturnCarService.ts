import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "../../cars/repositories/ICarsRepository";

@injectable()
export class ReturnCarService {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  public async execute(id: string) {
    const car = await this.carsRepository.findById(id);

    if (!car) {
      throw new Error("Car not found or not rented");
    }

    await this.carsRepository.delete(id);
  }
}
