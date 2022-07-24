import { Request, Response } from "express";
import { container } from "tsyringe";

import { RentCarService } from "../../../services/RentCarService";

export class RentCarController {
  public async handle(req: Request, res: Response) {
    const { id: user_id } = req.user;
    const { name } = req.body;

    const rentCarService = container.resolve(RentCarService);

    const car = await rentCarService.execute(name, user_id);

    return res.status(200).json(car);
  }
}
