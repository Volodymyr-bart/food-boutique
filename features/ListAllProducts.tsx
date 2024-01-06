"use client";

import ProductCart from "@/entities/Product/ProductCart";
import Pagination from "@/shared/Pagination/ui/Pagination";
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
    <div className="w-[925px] h-full flex flex-col items-center justify-center">
      {loading ? (
        <div className="">Loading...</div>
      ) : products.length ? (
        <ul className="w-full grid grid-cols-3 gap-5">
          {products.map((product: any) => (
            <ProductCart key={product._id} product={product} />
          ))}
        </ul>
      ) : (
        <div className="flex flex-col text-center">
          <p>Nothing was found for the selected filters...</p>
          <p>
            Try adjusting your search parameters or browse our range by other
            criteria to find the perfect product for you.{" "}
          </p>
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default ListAllProducts;
