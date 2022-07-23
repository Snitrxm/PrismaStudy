import { NextFunction } from "express";
import { Request, Response } from "express";
import { AppError } from "../errors/AppError";

export default async function ErrorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  if(err instanceof AppError){
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  })
}