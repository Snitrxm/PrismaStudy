import { Car } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../api/errors/AppError";
import { ICarsRepository } from "../../cars/repositories/ICarsRepository";

@injectable()
export class RentCarService {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  public async execute(name: string, user_id: string): Promise<Car> {
    const car = await this.carsRepository.findByName(name);

    if (!car) {
      throw new AppError("Car not found");
    }

    if (car.is_rent !== false) {
      throw new AppError("Car already rented");
    }

    car.is_rent = true;
    car.userId = user_id;

    const carRented = await this.carsRepository.update(car);

    return carRented;
  }
}
