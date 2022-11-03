import type { FC } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import type { Product } from "@prisma/client";
import { useRouter } from "next/router";

const AllProductsRow: FC<Product> = (product) => {
  const router = useRouter();

  const handleRouting = (id: string, action: string) => {
    router.push(`/productos/${action}/{${id}}`);
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
        {`$ ${product.price}`}
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
    </tr>
  );
};

export { AllProductsRow };
