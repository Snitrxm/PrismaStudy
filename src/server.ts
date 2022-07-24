import "reflect-metadata";
import "express-async-errors";
import express from "express";

import { v1Routes } from "./api/http/v1Routes";
import "./shared/container";
import ErrorMiddleware from "./api/middlewares/error";

const app = express();

app.use(express.json());

app.use(v1Routes);
app.use(ErrorMiddleware);

app.listen(3000, () => console.log("Server is running in port 3000"));
