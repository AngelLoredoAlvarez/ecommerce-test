import { router, publicProcedure } from "../trpc";

export const productRouter = router({
  allProducts: publicProcedure.query(({ ctx }) =>
    ctx.prisma.product.findMany()
  ),
});
