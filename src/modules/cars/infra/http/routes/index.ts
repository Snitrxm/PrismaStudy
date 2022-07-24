import { Router } from "express";

import { ensureAuthenticated } from "../../../../../api/middlewares/ensureAuthenticate";
import { CreateCarController } from "../controllers/CreateCarController";

export const carRoutes = Router();

const createCarController = new CreateCarController();

carRoutes.use(ensureAuthenticated);

carRoutes.post("/", createCarController.handle);
