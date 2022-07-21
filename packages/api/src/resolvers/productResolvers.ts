import { PaginationT } from "src/types/generics";
import { TRPCContextT } from "../config/createContext";
import { ProductT } from "../types/product";

const createProductResolver = async (input: ProductT, ctx: TRPCContextT): Promise<ProductT> => {
  const product = await ctx.prisma.product.create({
    data: {
      ...input,
    }
  });
  
  return product;
};

const getAllProducts = async (ctx: TRPCContextT, { page, limit }: PaginationT): Promise<ProductT[]> => {
  const products = await ctx.prisma.product.findMany({
    skip: (page - 1) * 10,
    take: limit,
  });
  return products;
};

const updateProductResolver = async (input: ProductT, ctx: TRPCContextT): Promise<ProductT> => {
  const product = await ctx.prisma.product.update({
    where: { id: input.id },
    data: { 
      ...input,
    }
  });

  return product;
};

export {
  createProductResolver,
  updateProductResolver,
  getAllProducts,
}