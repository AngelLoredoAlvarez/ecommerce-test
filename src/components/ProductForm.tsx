import type { FC } from "react";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

import { trpc } from "../utils/trpc";
import type { Product } from "@prisma/client";

interface ProductFormProps extends Product {
  action: string;
}

const ProductForm: FC<ProductFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormProps>({
    defaultValues: {
      code: props.code ? props.code : "",
      name: props.name ? props.name : "",
      description: props.description ? props.description : "",
      stock: props.stock ? props.stock : undefined,
      price: props.price ? props.price : undefined,
    },
  });

  const router = useRouter();

  const createdProduct = trpc.product.createProduct.useMutation({
    onSuccess() {
      router.push("/");
    },
  });

  const updatedProduct = trpc.product.editProduct.useMutation({
    onSuccess() {
      router.push("/");
    },
  });

  const onSubmit: SubmitHandler<ProductFormProps> = (data) => {
    if (props.action === "add") {
      createdProduct.mutate({
        code: data.code,
        name: data.name,
        description: data.description,
        stock: data.stock,
        price: data.price,
      });
    } else if (props.action === "edit") {
      updatedProduct.mutate({
        id: String(router.query.id),
        code: data.code,
        name: data.name,
        description: data.description,
        stock: data.stock,
        price: data.price,
      });
    }
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="product-code" className="sr-only">
              Código
            </label>
            <input
              id="product-code"
              type="text"
              className="relative block w-full appearance-none
                  rounded-none rounded-t-md border border-gray-300 px-3
                  py-2 text-gray-900 placeholder-gray-500
                  focus:z-10 focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Código"
              autoFocus
              {...register("code", { required: true })}
            />
            {errors.code && <span>El Código es Obligatorio</span>}
          </div>
          <div>
            <label htmlFor="product-name" className="sr-only">
              Nombre
            </label>
            <input
              id="product-name"
              type="text"
              className="relative block w-full appearance-none
                  rounded-none rounded-t-md border border-gray-300 px-3
                  py-2 text-gray-900 placeholder-gray-500
                  focus:z-10 focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Nombre"
              {...register("name", { required: true })}
            />
            {errors.name && <span>El Nombre es Obligatorio</span>}
          </div>
          <div>
            <label htmlFor="product-description" className="sr-only">
              Descripción
            </label>
            <input
              id="description"
              type="text"
              className="relative block w-full appearance-none
                  rounded-none rounded-b-md border border-gray-300 px-3
                  py-2 text-gray-900 placeholder-gray-500
                  focus:z-10 focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Descripción"
              {...register("description", { required: true })}
            />
            {errors.description && <span>La Descripción es Obligatoria</span>}
          </div>
          <div>
            <label htmlFor="product-inventario" className="sr-only">
              Inventario
            </label>
            <input
              id="product-stock"
              type="text"
              className="relative block w-full appearance-none
                  rounded-none rounded-t-md border border-gray-300 px-3
                  py-2 text-gray-900 placeholder-gray-500
                  focus:z-10 focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Inventario"
              {...register("stock", { required: true })}
            />
            {errors.stock && <span>El Inventario es Obligatorio</span>}
          </div>
          <div>
            <label htmlFor="product-price" className="sr-only">
              Precio
            </label>
            <input
              id="product-price"
              type="text"
              className="relative block w-full appearance-none
                  rounded-none rounded-t-md border border-gray-300 px-3
                  py-2 text-gray-900 placeholder-gray-500
                  focus:z-10 focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Precio"
              {...register("price", { required: true })}
            />
            {errors.price && <span>El Precio es Obligatorio</span>}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className={`group relative flex w-full justify-center
                rounded-md border border-transparent ${
                  props.action === "add"
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-amber-500 hover:bg-amber-600"
                } py-2 px-4
                text-sm font-medium text-white
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                focus:ring-offset-2 ${
                  createdProduct.isLoading ||
                  (updatedProduct.isLoading && "disabled:opacity-25")
                }`}
            disabled={createdProduct.isLoading || updatedProduct.isLoading}
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
  );
};

export { ProductForm };
