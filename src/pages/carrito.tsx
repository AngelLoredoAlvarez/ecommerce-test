import type { NextPage } from "next";

import { trpc } from "../utils/trpc";
import { Loading } from "../components/Loading";

const ShoppingCartPage: NextPage = () => {
  const cartProducts = trpc.cart.allProductsInCart.useQuery();
  console.log(cartProducts.data);

  if (cartProducts.isLoading) return <Loading />;

  return (
    <>
      <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[3rem]">
        Los Productos en el Carrito
      </h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block w-full p-1.5 align-middle">
            <div className="overflow-hidden rounded-lg border">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500"
                    >
                      Código
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500"
                    >
                      Descripción
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500"
                    >
                      Precio
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500"
                    >
                      Cantidad
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 hover:text-green-400"
                      colSpan={2}
                      scope="col"
                    />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td
                      className="text-black-500 text-center text-5xl"
                      colSpan={6}
                    >
                      No hay Productos en el Carrito{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;
