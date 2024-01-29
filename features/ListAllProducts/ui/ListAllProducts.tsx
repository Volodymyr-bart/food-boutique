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
    const debounce = setTimeout(() => {
      getAllProducts(filters);
    }, 500);
    return () => clearTimeout(debounce);
  }, [getAllProducts, filters]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center desktop:w-[925px]">
      {loading ? (
        <div className="">Loading...</div>
      ) : products.length ? (
        <ul className="w-full grid gap-5 mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 items-center justify-center">
          {products.map((product: any) => (
            <ProductCart key={product._id} product={product} />
          ))}
        </ul>
      ) : (
        <div className="flex flex-col text-center">
          <p>Nothing was found for the selected filters...</p>
          <p>
            Try adjusting your search parameters or browse our range by other
            criteria to find the perfect product for you.
          </p>
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default ListAllProducts;
