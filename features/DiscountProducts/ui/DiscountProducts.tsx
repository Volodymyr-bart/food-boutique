"use client";
import DiscountProduct from "@/entities/Product/DiscountProduct";
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
    <div className="flex flex-col gap-5">
      <h3 className="text-2xl leading-tight">Discount products</h3>
      <ul className="grid gap-3 items-center justify-center grid-cols-1 ">
        {discountProducts.slice(0, 2).map((product: any) => (
          <DiscountProduct key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default DiscountProducts;
