import type { FC } from "react";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import type { Product } from "@prisma/client";
import { useRouter } from "next/router";

const AllProductsRow: FC<Product> = (product) => {
  const router = useRouter();

  const handleRouting = (id: string, action: string) => {
    router.push(`/productos/${action}/${id}`);
  };

  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
        {product.code}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
        {product.name}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
        {product.description}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
        ${" "}
        {Number(product.price)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
        {product.stock}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="bg-white-800 rounded-full p-1 text-gray-800 hover:text-amber-400"
          >
            <PencilIcon
              className="h-6 w-6"
              aria-hidden="true"
              onClick={() => handleRouting(`${product.id}`, "modificar")}
            />
          </button>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="bg-white-800 rounded-full p-1 text-gray-800 hover:text-red-400"
          >
            <TrashIcon
              className="h-6 w-6"
              aria-hidden="true"
              onClick={() => handleRouting(`${product.id}`, "eliminar")}
            />
          </button>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className={`bg-white-800 rounded-full p-1 ${
              product.stock === 0 ? "text-gray-400" : "text-gray-800"
            } hover:${
              product.stock === 0 ? "text-gray-800" : "text-blue-400"
            } ${product.stock === 0 && "cursor-not-allowed"}`}
            disabled={product.stock === 0 ? true : false}
          >
            <PlusIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export { AllProductsRow };
