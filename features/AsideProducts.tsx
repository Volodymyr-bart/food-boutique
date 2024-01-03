"use client";

import DiscountProduct from "@/entities/Product/DiscountProduct";
import PopularProduct from "@/entities/Product/PopularProduct";
import { useProducts } from "@/store";
import { shallow } from "zustand/shallow";

const AsideProducts = () => {
  const { products, loading, getAllProducts } = useProducts(
    (state) => ({
      products: state.products,
      loading: state.loading,
      getAllProducts: state.getAllProducts,
    }),
    shallow
  );
  return (
    <aside className="w-[275px] flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl leading-tight">Popular products</h3>
        <ul className="flex flex-col gap-3">
          {products.map((product: any) => (
            <PopularProduct key={product._id} product={product} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl leading-tight">Discount products</h3>
        <ul className="flex flex-col gap-3">
          {products.map((product: any) => (
            <DiscountProduct key={product._id} product={product} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AsideProducts;
