import { Router } from "express";
import { userRoutes } from "../modules/users/infra/http/routes";

export const v1Routes = Router();

v1Routes.use('/user', userRoutes);
