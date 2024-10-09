import type { Response } from "express";

export const successResponse = ({
  res,
  data,
  message = "Success",
}: {
  res: Response;
  data: unknown;
  message: string;
}) => res.status(200).json({ success: true, data, message });

export const errorResponse = ({
  res,
  status = 500,
  message = "Error",
}: {
  res: Response;
  status: number;
  message: string;
}) => res.status(status).json({ success: false, message });
