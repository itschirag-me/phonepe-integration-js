import crypto from 'crypto';
import env from '../config/env';

/**
 * Function to convert object to base64
 * @param payload object
 * @returns
 */
export const ObjectToBase64 = (payload: any) => {
  /**
   * Converting payload to base64
   */
  const payloadString = JSON.stringify(payload, null, 4);

  const payloadBase64 = btoa(payloadString);

  return payloadBase64;
};

/**
 * Function to get signature for phonepe payment
 * @param payloadBase64 string
 * @param paymentEndpoint string
 * @returns string
 */
export const GetSignature = (
  payloadBase64: string,
  paymentEndpoint: string,
) => {
  const hash = crypto.createHash('sha256');

  const payloadXVerify = `${payloadBase64}${paymentEndpoint}${env.PHONEPE_KEY}`;

  hash.update(payloadXVerify);

  const hashString = hash.digest('hex');

  const xVerify = hashString + '###' + env.PHONEPE_KEY_INDEX;

  return xVerify;
};
