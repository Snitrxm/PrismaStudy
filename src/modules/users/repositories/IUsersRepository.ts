import { User } from "@prisma/client";

import { ICreateUserDTO } from "../dtos/ICreateUSerDTO";

export interface IUsersRepository {
  create({ name, email, password }: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  findAll(): Promise<User[]>;
  delete(id: string): Promise<void>;
}
