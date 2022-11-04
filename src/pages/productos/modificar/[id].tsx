import type { NextPage } from "next";
import { useRouter } from "next/router";

import { trpc } from "../../../utils/trpc";
import { ProductForm } from "../../../components/ProductForm";

import { Loading } from "../../../components/Loading";

const EditProductPage: NextPage = () => {
  const router = useRouter();

  const productToModify = trpc.product.getProductToEdit.useQuery({
    productId: `${router.query.id}`,
  });

  if (productToModify.isLoading) return <Loading />;

  return (
    <>
      <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[3rem]">
        Modificar Producto
      </h1>
      <ProductForm action="edit" {...productToModify.data} />
    </>
  );
};

export default EditProductPage;
