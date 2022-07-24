import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarService } from "../../../service/CreateCarService";

export class CreateCarController {
  public async handle(req: Request, res: Response) {
    const { name, brand } = req.body;

    const createCarService = container.resolve(CreateCarService);

    const car = await createCarService.execute({ name, brand });

    return res.status(201).json(car);
  }
}
