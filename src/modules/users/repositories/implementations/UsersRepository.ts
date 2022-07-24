import { User } from "@prisma/client";

import { prisma } from "../../../../prisma/client";
import { ICreateUserDTO } from "../../dtos/ICreateUSerDTO";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user as User;
  }

  public async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany({});

    return users;
  }

  public async findById(id: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user as User;
  }

  public async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
