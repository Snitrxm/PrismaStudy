import { Router } from "express";

import { ensureAuthenticated } from "../../../../../api/middlewares/ensureAuthenticate";
import { CreateUserValidator } from "../../validator/CreateUserValidator";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/CreateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { FindAllUsersController } from "../controllers/FindAllUsersController";
import { RentCarController } from "../controllers/RentCarController";
import { ReturnCarController } from "../controllers/ReturnCarController";

export const userRoutes = Router();

const createUserController = new CreateUserController();
const findAllUsersController = new FindAllUsersController();
const deleteUserController = new DeleteUserController();
const authenticateUserController = new AuthenticateUserController();
const rentCarController = new RentCarController();
const returnCarController = new ReturnCarController();

userRoutes.post("/", CreateUserValidator, createUserController.handle);
userRoutes.post("/login", authenticateUserController.handle);

userRoutes.use(ensureAuthenticated);

userRoutes.get("/findAll", findAllUsersController.handle);
userRoutes.post("/rent", rentCarController.handle);
userRoutes.post("/return", returnCarController.handle);
userRoutes.delete("/:id", deleteUserController.handle);
