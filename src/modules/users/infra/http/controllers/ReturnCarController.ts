import { Request, Response } from "express";
import { container } from "tsyringe";

import { ReturnCarService } from "../../../services/ReturnCarService";

export class ReturnCarController {
  public async handle(req: Request, res: Response) {
    const { id } = req.body;

    const returnCarService = container.resolve(ReturnCarService);

    const car = await returnCarService.execute(id);

    return res.status(200).json(car);
  }
}
