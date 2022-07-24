import { Car } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { ICarsRepository } from "../repositories/ICarsRepository";

@injectable()
export class CreateCarService {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  public async execute({ name, brand }: ICreateCarDTO): Promise<Car> {
    const car = await this.carsRepository.create({ name, brand });
    return car;
  }
}
