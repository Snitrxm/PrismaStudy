import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../api/errors/AppError";
import { ICreateUserDTO } from "../dtos/ICreateUSerDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  public async execute({ name, email }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if(userAlreadyExists){
      throw new AppError("User already exists.");
    }

    const user = await this.usersRepository.create({ name, email });

    return user;

  }
}