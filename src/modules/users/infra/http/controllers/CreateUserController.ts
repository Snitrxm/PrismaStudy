import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserService } from '../../../services/CreateUserService';

export class CreateUserController {
  public async handle(req: Request, res: Response) {
    const { name, email } = req.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({ name, email});

    return res.json(user);
  }
}