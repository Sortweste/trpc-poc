import express from 'express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import AppRouter from './routes/router';
import createContext from './config/createContext';

const app = express();

app.use('/api', createExpressMiddleware({
  router: AppRouter,
  createContext,
}));

export default app;