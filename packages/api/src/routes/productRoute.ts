import { createProductResolver, getAllProducts } from "../resolvers/productResolvers";
import { ProductT } from "../types/product";
import createRouter from "../utils/createRouter";
import { createProductValidation } from "../validations/productSchema";

const products = createRouter()
  .query('products', {
    resolve: () => getAllProducts(),
  })
  .mutation('create', {
    input: (value) => createProductValidation(value as ProductT),
    resolve: ({ input, ctx }) => createProductResolver(input, ctx),
  })
  // .mutation('update');

export default products;