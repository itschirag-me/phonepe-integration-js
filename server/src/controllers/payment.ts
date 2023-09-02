import { NextFunction, Request, Response } from 'express';
import {
  PaymentInitialize,
} from '../services/payment.service';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import env from '../config/env';

export const initializePayment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const response = await PaymentInitialize();
    res.status(StatusCodes.OK).json({
      status: ReasonPhrases.OK,
      statusCode: StatusCodes.OK,
      message: 'Payment initiated',
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};

export const redirectPayment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { code, transactionId, merchantUserId } = req.body;

    if (code === 'PAYMENT_SUCCESS') {
      return res.redirect(
        `${env.PHONEPE_FRONTEND_REDIRECT_URL}?code=${code}`,
      );
    }

    res.status(StatusCodes.BAD_REQUEST).json({
      status: ReasonPhrases.BAD_REQUEST,
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Payment success',
      data: { paymentStatus: code, merchantUserId, transactionId },
    });
  } catch (error) {
    next(error);
  }
};