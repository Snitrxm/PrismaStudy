import { Car } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "../repositories/ICarsRepository";

@injectable()
export class FindCarByUserIdService {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  public async execute(userId: string): Promise<Car> {
    const car = await this.carsRepository.findCarByUserId(userId);

    return car;
  }
}
