import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export class FindAllUsersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  public async execute() {
    const users = await this.usersRepository.findAll();

    return users;
  }
}