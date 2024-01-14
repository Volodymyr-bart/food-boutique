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
    <ul className="grid gap-3 items-center justify-center grid-cols-1 tablet:grid-cols-2 tablet:items-start desktop:grid-cols-1">
      {popularityProducts.slice(0, 4).map((product: Product) => (
        <PopularProduct key={product._id} product={product} />
      ))}
    </ul>
  );
};

export default PopularityProducts;
