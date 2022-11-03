import type { FC } from "react";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";

interface ProductFormProps {
  action: string;
}

interface RHFProps {
  code?: string;
  name?: string;
  description?: string;
  stock?: string;
  price?: string;
}

const ProductForm: FC<ProductFormProps> = (props) => (
  <form>
    <div>
      <div className="w-full max-w-md space-y-8">
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="product-code" className="sr-only">
                Código
              </label>
              <input
                id="product-code"
                name="code"
                type="text"
                required
                className="relative block w-full appearance-none
                  rounded-none rounded-t-md border border-gray-300 px-3
                  py-2 text-gray-900 placeholder-gray-500
                  focus:z-10 focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Código"
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="product-name" className="sr-only">
                Nombre
              </label>
              <input
                id="product-name"
                name="name"
                type="text"
                required
                className="relative block w-full appearance-none
                  rounded-none rounded-t-md border border-gray-300 px-3
                  py-2 text-gray-900 placeholder-gray-500
                  focus:z-10 focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Nombre"
              />
            </div>
            <div>
              <label htmlFor="product-description" className="sr-only">
                Descripción
              </label>
              <input
                id="description"
                name="description"
                type="text"
                required
                className="relative block w-full appearance-none
                  rounded-none rounded-b-md border border-gray-300 px-3
                  py-2 text-gray-900 placeholder-gray-500
                  focus:z-10 focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Descripción"
              />
            </div>
            <div>
              <label htmlFor="product-inventario" className="sr-only">
                Inventario
              </label>
              <input
                id="product-stock"
                name="stock"
                type="text"
                required
                className="relative block w-full appearance-none
                  rounded-none rounded-t-md border border-gray-300 px-3
                  py-2 text-gray-900 placeholder-gray-500
                  focus:z-10 focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Inventario"
              />
            </div>
            <div>
              <label htmlFor="product-price" className="sr-only">
                Precio
              </label>
              <input
                id="product-price"
                name="price"
                type="text"
                required
                className="relative block w-full appearance-none
                  rounded-none rounded-t-md border border-gray-300 px-3
                  py-2 text-gray-900 placeholder-gray-500
                  focus:z-10 focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Precio"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center
                rounded-md border border-transparent bg-indigo-600 py-2 px-4
                text-sm font-medium text-white hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                {props.action === "add" ? (
                  <PlusIcon className="h-6 w-6" aria-hidden="true" />
                ) : props.action === "edit" ? (
                  <PencilIcon className="h-6 w-6" aria-hidden="true" />
                ) : null}
              </span>
              {props.action === "add"
                ? "Agregar Producto"
                : props.action === "edit"
                ? "Modificar"
                : ""}
            </button>
          </div>
        </form>
      </div>
    </div>
  </form>
);

export { ProductForm };
