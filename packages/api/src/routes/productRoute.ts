import { PaginationT } from "src/types/generics";
import { createProductResolver, getAllProducts, updateProductResolver } from "../resolvers/productResolvers";
import { ProductT } from "../types/product";
import createRouter from "../utils/createRouter";
import { createProductValidation, getProductsValidation, updateProductValidation } from "../validations/productSchema";

const products = createRouter()
  .query('/products', {
    input: (value) => getProductsValidation(value as PaginationT),
    resolve: ({ ctx, input }) => getAllProducts(ctx, input),
  })
  .mutation('/create', {
    input: (value) => createProductValidation(value as ProductT),
    resolve: ({ input, ctx }) => createProductResolver(input, ctx),
  })
  .mutation('/update', {
    input: (value) => updateProductValidation(value as ProductT),
    resolve: ({ input, ctx }) => updateProductResolver(input, ctx),
  });

export default products;