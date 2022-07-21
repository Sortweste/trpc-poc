import { router } from '@trpc/server';
import { TRPCContextT } from '../config/createContext';

const createRouter = () => {
  return router<TRPCContextT>();
}

export default createRouter;