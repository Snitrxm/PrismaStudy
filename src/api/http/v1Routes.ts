import { Router } from "express";

import { carRoutes } from "../../modules/cars/infra/http/routes";
import { userRoutes } from "../../modules/users/infra/http/routes";

export const v1Routes = Router();

v1Routes.use("/user", userRoutes);
v1Routes.use("/car", carRoutes);
