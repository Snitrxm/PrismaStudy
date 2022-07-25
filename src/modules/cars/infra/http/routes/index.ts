import { Router } from "express";

import { ensureAuthenticated } from "../../../../../api/middlewares/ensureAuthenticate";
import { CreateCarController } from "../controllers/CreateCarController";
import { FindCarByUserIdController } from "../controllers/FindCarByUserIdController";

export const carRoutes = Router();

const createCarController = new CreateCarController();
const findCarByUserIdController = new FindCarByUserIdController();

carRoutes.use(ensureAuthenticated);

carRoutes.post("/", createCarController.handle);
carRoutes.get("/findCar", findCarByUserIdController.handle);
