import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const productRouter = router({
  allProducts: publicProcedure.query(({ ctx }) =>
    ctx.prisma.product.findMany()
  ),
  getProductToEdit: publicProcedure
    .input(z.object({ productId: z.string() }))
    .query(({ ctx, input }) =>
      ctx.prisma.product.findUnique({
        where: {
          id: input.productId,
        },
      })
    ),
});
