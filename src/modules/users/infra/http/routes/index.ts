import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";
import { FindAllUsersController } from "../controllers/FindAllUsersController";

export const userRoutes = Router();

const createUserController = new CreateUserController();
const findAllUsersController = new FindAllUsersController();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/findAll", findAllUsersController.handle);
