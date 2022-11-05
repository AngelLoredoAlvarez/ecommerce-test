import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const cartRouter = router({
  allProductsInCart: publicProcedure.query(({ ctx }) =>
    ctx.prisma.cart.findMany({
      include: {
        product: {
          select: {
            code: true,
            name: true,
            description: true,
            price: true,
          },
        },
      },
    })
  ),
  addToCart: publicProcedure
    .input(
      z.object({
        product_id: z.string(),
        currentStock: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      try {
        ctx.prisma.product
          .update({
            where: {
              id: input.product_id,
            },
            data: {
              stock: input.currentStock - 1,
              cart: {
                create: {
                  quantity: 1,
                },
              },
            },
            include: {
              cart: true,
            },
          })
          .then((response) => response);
      } catch (error) {
        console.log(error);
      }
    }),
});
