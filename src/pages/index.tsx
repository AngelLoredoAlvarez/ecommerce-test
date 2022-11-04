import type { NextPage } from "next";
import Link from "next/link";

import { trpc } from "../utils/trpc";
import { AllProductsRow } from "../components/AllProductsRow";
import { Loading } from "../components/Loading";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const products = trpc.product.allProducts.useQuery();

  if (products.isLoading) return <Loading />;

  return (
    <>
      <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[3rem]">
        Los Productos{" "}
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
                      Inventario
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 hover:text-green-400"
                      colSpan={2}
                      scope="col"
                    >
                      <Link href="/agregar-producto">Agregar Producto</Link>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {Array.isArray(products.data) && products.data.length > 0 ? (
                    products.data?.map((product) => (
                      <AllProductsRow key={product.id} {...product} />
                    ))
                  ) : (
                    <tr>
                      <td
                        className="text-black-500 text-center text-5xl"
                        colSpan={6}
                      >
                        No se ha registrado ningun Producto
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
        {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
      </div>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <Link
        className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </Link>
    </section>
  );
};
