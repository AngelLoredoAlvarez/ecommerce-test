import type { NextPage } from "next";
import { ProductForm } from "../components/ProductForm";

const AddProductPage: NextPage = () => {
  return (
    <>
      <div>Agregar Producto Page</div>
      <ProductForm action="add" />
    </>
  );
};

export default AddProductPage;
