import { inferAsyncReturnType } from "@trpc/server";
import { prisma } from "../prisma";

const createContext = () => {
  return { prisma }
};

export type TRPCContextT = inferAsyncReturnType<typeof createContext>;

export default createContext;