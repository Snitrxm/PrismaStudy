import "reflect-metadata";
import express from 'express';
import { v1Routes } from './http/v1Routes';
import "./shared/container"

const app = express();
app.use(express.json());
app.use(v1Routes);


app.listen(3000, () => console.log("Server is running in port 3000"));