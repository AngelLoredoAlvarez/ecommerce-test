import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const cartRouter = router({
  allProductsInCart: publicProcedure.query(({ ctx }) =>
    ctx.prisma.cart.findMany()
  ),
});
