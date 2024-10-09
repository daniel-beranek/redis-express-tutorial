import type { Request, Response, NextFunction } from "express";
import { errorResponse } from "@utils";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);
  errorResponse({ res, status: 500, message: "Internal server error" });
};
