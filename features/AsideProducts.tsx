"use client";

import DiscountProduct from "@/entities/Product/DiscountProduct";
import PopularProduct from "@/entities/Product/PopularProduct";
import { useProducts } from "@/store";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

const AsideProducts = () => {
  const {
    popularityProducts,
    getProductsByPopularity,
    discountproducts,
    getProductsByDiscount,
  } = useProducts(
    (state) => ({
      popularityProducts: state.popularityProducts,
      discountproducts: state.discountProducts,
      getProductsByPopularity: state.getProductsByPopularity,
      getProductsByDiscount: state.getProductsByDiscount,
    }),
    shallow
  );

  useEffect(() => {
    getProductsByPopularity();
    getProductsByDiscount();
  }, [getProductsByPopularity, getProductsByDiscount]);

  return (
    <aside className="mx-auto w-[275px] flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl leading-tight">Popular products</h3>
        <ul className="grid gap-3 items-center justify-center grid-cols-1">
          {popularityProducts.slice(0, 4).map((product: any) => (
            <PopularProduct key={product._id} product={product} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl leading-tight">Discount products</h3>
        <ul className="grid gap-3 items-center justify-center grid-cols-1 ">
          {discountproducts.slice(0, 2).map((product: any) => (
            <DiscountProduct key={product._id} product={product} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AsideProducts;
