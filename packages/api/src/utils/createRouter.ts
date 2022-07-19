import trpc from '@trpc/server';

const createRouter = () => {
  return trpc.router<Context>();
}

export default createRouter;