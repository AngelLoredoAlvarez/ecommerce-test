import { router } from "../trpc";
import { exampleRouter } from "./example";
import { productRouter } from "./product";
import { cartRouter } from "./cart";

export const appRouter = router({
  example: exampleRouter,
  product: productRouter,
  cart: cartRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
