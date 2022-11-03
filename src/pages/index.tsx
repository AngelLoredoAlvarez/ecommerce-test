import type { NextPage } from "next";
import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

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
                      ID
                    </th>
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
                      Descripción
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
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                      1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      Jone Doe
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      jonne62@gmail.com
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
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                      2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      Jone Doe
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      jonne62@gmail.com
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                      3
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      Jone Doe
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      jonne62@gmail.com
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>
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
