import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { ICreateUserDTO } from "../../dtos/ICreateUSerDTO";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  public async create({ name, email }: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name, 
        email
      }
    })
    
    return user;
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })

    return user as User;
  }

  public async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany({});

    return users;
  }
}