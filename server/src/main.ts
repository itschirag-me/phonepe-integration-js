import express, { Application } from 'express';
import env from './config/env';
import {
  handleDefault,
  handleError,
  handleHealthz,
  handleNotFound,
} from './controllers';
import api from './api';
import cors from 'cors';

const app: Application = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app
  .use(cors(corsOptions))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .get('/', handleDefault)
  .get('/healthz', handleHealthz)
  .use('/api', api)
  .use(handleError)
  .use(handleNotFound);

app.listen(env.PORT, () => console.log('Server running on port %s', env.PORT));
