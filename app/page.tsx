"use client";
import AsideProducts from "@/features/AsideProducts";
import FilterBar from "@/features/FilterBar";
import Hero from "@/features/Hero";
import ListAllProducts from "@/features/ListAllProducts";
import Pagination from "@/shared/Pagination/ui/Pagination";
import { useCartProducts } from "@/store";
import { shallow } from "zustand/shallow";

export default function Home() {
  const { products } = useCartProducts(
    (state) => ({
      products: state.products,
    }),
    shallow
  );
  

  return (
    <main className="flex flex-col items-center">
      <Hero />
      <div className="mt-20 mx-auto">
        <FilterBar />
        <section className=" flex mt-[60px] gap-8">
          <ListAllProducts />
          <AsideProducts />
        </section>
      </div>
    </main>
  );
}
