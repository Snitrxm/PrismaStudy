import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindCarByUserIdService } from "../../../service/FindCarByUserIdService";

export class FindCarByUserIdController {
  public async handle(req: Request, res: Response) {
    const { id: user_id } = req.user;

    const findCarByUserIdService = container.resolve(FindCarByUserIdService);

    const car = await findCarByUserIdService.execute(user_id);
    return res.json(car);
  }
}
