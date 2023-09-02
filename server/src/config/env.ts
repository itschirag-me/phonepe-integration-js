import dotenv from 'dotenv';
import Env from './env.d';

dotenv.config({
  path: `${process.cwd()}/env/.env.${
    process.env.NODE_ENV ? process.env.NODE_ENV : '.dev'
  }`,
});

const env: Env = {
  PORT: process.env.PORT!,

  PHONEPE_KEY: process.env.PHONEPE_KEY!,
  
  PHONEPE_KEY_INDEX: process.env.PHONEPE_KEY_INDEX!,

  PHONEPE_MERCHANT_ID: process.env.PHONEPE_MERCHANT_ID!,

  PHONEPE_REDIRECT_URL: process.env.PHONEPE_REDIRECT_URL!,

  PHONEPE_FRONTEND_REDIRECT_URL: process.env.PHONEPE_FRONTEND_REDIRECT_URL!,

  PHONEPE_BASE_URL: process.env.PHONEPE_BASE_URL!,
};

export default env;
