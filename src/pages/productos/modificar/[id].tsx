import type { NextPage } from "next";
import { useRouter } from "next/router";

import { trpc } from "../../../utils/trpc";
import { ProductForm } from "../../../components/ProductForm";

const EditProductPage: NextPage = () => {
  const router = useRouter();

  const productToModify = trpc.product.getProductToEdit.useQuery({
    productId: `${router.query.id}`,
  });

  return (
    <>
      <h1>Modificar Producto</h1>
      <ProductForm action="edit" {...productToModify.data} />
    </>
  );
};

export default EditProductPage;
