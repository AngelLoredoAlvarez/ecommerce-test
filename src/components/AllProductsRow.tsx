import type { FC } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import type { Product } from "@prisma/client";

const AllProductsRow: FC<Product> = (product) => {
  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
        {product.id}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
        {product.code}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
        {product.description}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="bg-white-800 rounded-full p-1 text-gray-800 hover:text-amber-400"
          >
            <PencilIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="bg-white-800 rounded-full p-1 text-gray-800 hover:text-red-400"
          >
            <TrashIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export { AllProductsRow };
