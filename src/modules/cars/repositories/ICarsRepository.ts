import { Car } from "@prisma/client";

import { ICreateCarDTO } from "../dtos/ICreateCarDTO";

export interface ICarsRepository {
  create({ name, brand }: ICreateCarDTO): Promise<Car>;
  findByName(name: string): Promise<Car>;
  findById(id: string): Promise<Car>;
  delete(id: string): Promise<void>;
  update({ name, brand, id, is_rent, userId }: Car): Promise<Car>;
  findCarByUserId(userId: string): Promise<Car>;
}
