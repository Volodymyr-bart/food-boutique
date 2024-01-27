"use client";
require("dotenv").config();

import FilterBar from "@/features/FilterBar/ui/FilterBar";
import Hero from "@/features/Hero";
import ListAllProducts from "@/features/ListAllProducts/ui/ListAllProducts";
import AsideProducts from "@/widgets/AsideProducts/ui/AsideProducts";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <div className="mt-20 mx-auto">
        <FilterBar />
        <section className="flex mt-[60px] mb-20 gap-8 flex-col desktop:flex-row">
          <ListAllProducts />
          <AsideProducts />
        </section>
      </div>
    </main>
  );
}
