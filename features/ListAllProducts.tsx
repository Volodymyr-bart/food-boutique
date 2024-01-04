"use client";

import ProductCart from "@/entities/Product/ProductCart";
import { useProducts } from "@/store";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

const ListAllProducts = () => {
  const { products, loading, getAllProducts, filters } = useProducts(
    (state) => ({
      filters: state.filters,
      products: state.products,
      loading: state.loading,
      getAllProducts: state.getAllProducts,
    }),
    shallow
  );

  useEffect(() => {
    getAllProducts(filters);
  }, [getAllProducts, filters]);

  return (
    <>
      {loading ? (
        <div className="">Loading...</div>
      ) : (
        <ul className="w-[925px] h-full grid grid-cols-3 gap-5">
          {products.map((product: any) => (
            <ProductCart key={product._id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ListAllProducts;
