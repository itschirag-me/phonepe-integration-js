import { Request, Response, Router } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { initializePayment, redirectPayment } from '../controllers/payment';

const api = Router();

api
  .post('/callback', (req: Request, res: Response) => {
    console.log('Payment callback', req.body);
    res.status(StatusCodes.OK).json({
      status: ReasonPhrases.OK,
      statusCode: StatusCodes.OK,
      message: 'Payment callback',
    });
  })
  .post('/redirect', redirectPayment)
  .post('/initiate', initializePayment);

export default api;
