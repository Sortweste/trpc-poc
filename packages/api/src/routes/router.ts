import createRouter from "../utils/createRouter";
import products from "./productRoute";
import purchases from "./purchaseRoute";
import users from "./userRoute";

const AppRouter = createRouter()
  .merge('user', users)
  .merge('product', products)
  .merge('purchase', purchases);

export type AppRouterT = typeof AppRouter;

export default AppRouter;