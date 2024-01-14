"use client";
import DiscountProduct from "@/entities/Product/DiscountProduct";
import { Product } from "@/entities/types/Product";
import { useProducts } from "@/store";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

const DiscountProducts = () => {
  const { discountProducts, getProductsByDiscount } = useProducts(
    (state) => ({
      discountProducts: state.discountProducts,
      getProductsByDiscount: state.getProductsByDiscount,
    }),
    shallow
  );

  useEffect(() => {
    getProductsByDiscount();
  }, [getProductsByDiscount]);

  return (
    <ul className="grid gap-3 items-center justify-center grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-1">
      {discountProducts.slice(0, 2).map((product: Product) => (
        <DiscountProduct key={product._id} product={product} />
      ))}
    </ul>
  );
};

export default DiscountProducts;
