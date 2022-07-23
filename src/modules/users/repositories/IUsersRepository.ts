import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/ICreateUSerDTO";

export interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): Promise<User>
  findByEmail(email: string): Promise<User>
}