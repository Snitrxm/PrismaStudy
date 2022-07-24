import { Car } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../api/errors/AppError";
import { ICreateCarDTO } from "../../cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "../../cars/repositories/ICarsRepository";

@injectable()
export class RentCarService {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  public async execute({ name, brand, user_id }: ICreateCarDTO): Promise<Car> {
    const carAlreadyRented = await this.carsRepository.findByName(name);

    if (carAlreadyRented) {
      throw new AppError("Car already rented");
    }

    const car = await this.carsRepository.create({ name, brand, user_id });

    return car;
  }
}
