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
  getProductToDelete: publicProcedure
    .input(z.object({ productId: z.string() }))
    .query(({ ctx, input }) =>
      ctx.prisma.product.findUnique({
        where: {
          id: input.productId,
        },
        select: {
          id: true,
          name: true,
        },
      })
    ),
  createProduct: publicProcedure
    .input(
      z.object({
        code: z.string(),
        name: z.string(),
        description: z.string(),
        stock: z.number(),
        price: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      try {
        ctx.prisma.product
          .create({
            data: {
              code: input.code,
              name: input.name,
              description: input.description,
              stock: input.stock,
              price: input.price,
            },
          })
          .then((response) => response);
      } catch (error) {
        console.log(error);
      }
    }),
  editProduct: publicProcedure
    .input(
      z.object({
        id: z.string(),
        code: z.string(),
        name: z.string(),
        description: z.string(),
        stock: z.number(),
        price: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      try {
        ctx.prisma.product
          .update({
            where: {
              id: input.id,
            },
            data: {
              code: input.code,
              name: input.name,
              description: input.description,
              stock: input.stock,
              price: input.price,
            },
          })
          .then((response) => response);
      } catch (error) {
        console.log(error);
      }
    }),
  deleteProduct: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      try {
        ctx.prisma.product
          .delete({
            where: {
              id: input.id,
            },
          })
          .then((response) => response);
      } catch (error) {
        console.log(error);
      }
    }),
});
