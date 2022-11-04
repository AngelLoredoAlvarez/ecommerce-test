import type { NextPage } from "next";
import { ProductForm } from "../components/ProductForm";

const AddProductPage: NextPage = () => {
  return (
    <>
      <div className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[3rem]">
        Agregar Producto
      </div>
      <ProductForm action="add" />
    </>
  );
};

export default AddProductPage;
