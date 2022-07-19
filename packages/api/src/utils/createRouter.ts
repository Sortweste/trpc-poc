import trpc from '@trpc/server';
import { TRPCContextT } from '../config/createContext';

const createRouter = () => {
  return trpc.router<TRPCContextT>();
}

export default createRouter;