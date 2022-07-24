import { Car } from "@prisma/client";

import { prisma } from "../../../../prisma/client";
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../ICarsRepository";

export class CarsRepository implements ICarsRepository {
  public async create({ name, brand }: ICreateCarDTO): Promise<Car> {
    const car = await prisma.car.create({
      data: {
        name,
        brand,
      },
    });

    return car;
  }

  public async findByName(name: string): Promise<Car> {
    const car = await prisma.car.findFirst({
      where: {
        name,
      },
    });

    return car as Car;
  }

  public async findById(id: string): Promise<Car> {
    const car = await prisma.car.findUnique({
      where: {
        id,
      },
    });

    return car as Car;
  }

  public async delete(id: string): Promise<void> {
    await prisma.car.delete({
      where: {
        id,
      },
    });
  }

  public async update({ id, name, brand, is_rent, userId }: Car): Promise<Car> {
    const car = await prisma.car.update({
      where: {
        id,
      },
      data: {
        name,
        brand,
        is_rent,
        userId,
      },
    });

    return car;
  }
}
