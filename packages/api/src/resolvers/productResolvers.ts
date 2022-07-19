import { TRPCContextT } from "../config/createContext";
import { ProductT } from "../types/product";

const createProductResolver = async (input: ProductT, ctx: TRPCContextT): Promise<ProductT> => {
  const product = await ctx.prisma.product.create({
    data: {
      ...input
    }
  });
  return product;
};

const getAllProducts = (): ProductT[] => {
  return [];
};

export {
  createProductResolver,
  getAllProducts,
}