import AsideProducts from "@/features/AsideProducts";
import Hero from "@/features/Hero";
import ListAllProducts from "@/features/ListAllProducts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <div className="mt-20 mx-auto">
        <div className=" flex gap-2">
          <div className="w-[270px] rounded-30 flex px-4 py-5 border bg-secondaryWhite">
            <input
              type="text"
              name="search"
              className="bg-secondaryWhite border-none focus:ring focus:ring-secondaryWhite focus:outline-none"
            />
            <Image
              src="/icons/search.png"
              alt="Hero"
              width={20}
              height={20}
              priority
            />
          </div>
          <select
            name="category"
            id="category"
            className="w-[190px] rounded-30 flex px-4 py-5 border bg-secondaryWhite"
          >
            <option value="categories">Categories</option>
            <option value="1">other</option>
          </select>
          <select
            name="sort"
            id="sort"
            className="w-[190px] rounded-30 flex px-4 py-5 border bg-secondaryWhite"
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
        <div className=" flex mt-[60px] gap-8">
          <ListAllProducts />
          <AsideProducts />
        </div>
        Pagination
      </div>
    </main>
  );
}
