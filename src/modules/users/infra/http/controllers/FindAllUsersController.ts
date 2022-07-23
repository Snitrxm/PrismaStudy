import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllUsersService } from "../../../services/FindAllUsersService";

export class FindAllUsersController {
  public async handle(req: Request, res: Response) {
    const findAllUsersService = container.resolve(FindAllUsersService);

    const users = await findAllUsersService.execute();

    return res.status(200).json(users);
  }
}
