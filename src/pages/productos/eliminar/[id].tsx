import type { NextPage } from "next";
import { useRouter } from "next/router";
import { TrashIcon } from "@heroicons/react/24/outline";

import { trpc } from "../../../utils/trpc";

const DeleteProductPage: NextPage = () => {
  const router = useRouter();

  const productToDelete = trpc.product.getProductToDelete.useQuery({
    productId: `${router.query.id}`,
  });

  const deletedProduct = trpc.product.deleteProduct.useMutation({
    onSuccess() {
      router.push("/");
    },
  });

  const handleDelete = () => {
    deletedProduct.mutate({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      id: router.query.id,
    });
  };

  return (
    <>
      <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[3rem]">
        ¿Eliminar Producto?
      </h1>
      <div className="justify-items-center">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[1rem]">
          ¿Estas completamente seguro que quieres eliminar el producto?:{" "}
        </h1>
        <h1 className="text-center text-5xl text-emerald-500 md:text-[2rem]">
          {productToDelete.data?.name}
        </h1>

        <button
          type="submit"
          className="group relative flex w-full justify-center
                rounded-md border border-transparent bg-red-500 py-2 px-4
                text-sm font-medium text-white hover:bg-red-600
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                focus:ring-offset-2"
          onClick={handleDelete}
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <TrashIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          Eliminar Producto
        </button>
      </div>
    </>
  );
};

export default DeleteProductPage;
