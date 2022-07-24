import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserService } from "../../../services/DeleteUserService";

export class DeleteUserController {
  public async handle(req: Request, res: Response) {
    const deleteUserService = container.resolve(DeleteUserService);

    await deleteUserService.execute(req.params.id);

    return res.status(204).json({ message: "Delete success!" });
  }
}
