import type { NextPage } from "next";
import { useRouter } from "next/router";

import { trpc } from "../../../utils/trpc";

const DeleteProductPage: NextPage = () => {
  const router = useRouter();
  const productToDelete = trpc.product.getProductToDelete.useQuery({
    productId: `${router.query.id}`,
  });

  return (
    <>
      <h1>
        ¿Estas seguro que quieres eliminar el producto:{" "}
        {productToDelete.data?.name}?
      </h1>
    </>
  );
};

export default DeleteProductPage;
