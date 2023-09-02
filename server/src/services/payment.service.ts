import axios from 'axios';
import env from '../config/env';
import { GetSignature, ObjectToBase64 } from '../utils/helper';

export const PaymentInitialize = async () => {
  try {
    const payload = {
      merchantId: env.PHONEPE_MERCHANT_ID,
      merchantTransactionId: 'MT7850590068188104',
      merchantUserId: 'U7850590068188104',
      amount: 49,
      redirectUrl: env.PHONEPE_REDIRECT_URL,
      redirectMode: 'POST',
      mobileNumber: '9999999999',
      paymentInstrument: {
        type: 'PAY_PAGE',
      },
    };

    const paymentEndpoint = '/pg/v1/pay';

    const payloadBase64 = ObjectToBase64(payload);

    const xVerify = GetSignature(payloadBase64, paymentEndpoint);

    const payment = await axios.post(
      `${env.PHONEPE_BASE_URL}/pg/v1/pay`,
      {
        request: payloadBase64,
      },
      {
        headers: {
          'content-type': 'application/json',
          'x-verify': xVerify,
        },
      },
    );

    return payment.data;
  } catch (error) {
    throw error;
  }
};
