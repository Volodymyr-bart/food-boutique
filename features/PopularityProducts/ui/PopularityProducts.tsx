"use cllient";

import PopularProduct from "@/entities/Product/PopularProduct";
import { Product } from "@/entities/types/Product";
import { useProducts } from "@/store";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

const PopularityProducts = () => {
  const { popularityProducts, getProductsByPopularity } = useProducts(
    (state) => ({
      popularityProducts: state.popularityProducts,
      getProductsByPopularity: state.getProductsByPopularity,
    }),
    shallow
  );

  useEffect(() => {
    getProductsByPopularity();
  }, [getProductsByPopularity]);

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-2xl leading-tight">Popular products</h3>
      <ul className="grid gap-3 items-center justify-center grid-cols-1">
        {popularityProducts.slice(0, 4).map((product: Product) => (
          <PopularProduct key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default PopularityProducts;
