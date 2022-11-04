import { Decimal } from "@prisma/client/runtime";
import type { FC } from "react";

interface ProductProps {
  code: string;
  name: string;
  description: string;
  price: string;
}

interface AllProuctsInCartRowProps {
  id: string;
  product_id: string;
  quantity: number;
  product: ProductProps;
}

const AllProductsInCarRow: FC<AllProuctsInCartRowProps> = (product) => {
  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
        {product.product.code}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
        {product.product.name}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
        {product.product.description}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
        {+product.product.price * product.quantity}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
        {product.quantity}
      </td>
    </tr>
  );
};

export { AllProductsInCarRow };
