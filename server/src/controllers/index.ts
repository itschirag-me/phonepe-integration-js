import { NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export const handleError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status =
    err?.response?.statusText || ReasonPhrases.INTERNAL_SERVER_ERROR;
  const message =
    err?.response?.data?.message || ReasonPhrases.INTERNAL_SERVER_ERROR;
  const statusCode = err?.response?.status || StatusCodes.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json({
    status,
    statusCode,
    message,
  });
};

export const handleNotFound = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(StatusCodes.NOT_FOUND).json({
    status: ReasonPhrases.NOT_FOUND,
    statusCode: StatusCodes.NOT_FOUND,
    message: 'Not found',
  });
};

export const handleHealthz = (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    status: ReasonPhrases.OK,
    statusCode: StatusCodes.OK,
    message: 'Health check passed',
  });
};

export const handleDefault = (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    status: ReasonPhrases.OK,
    statusCode: StatusCodes.OK,
    message: 'PhonePe Payment Gateway',
  });
};
