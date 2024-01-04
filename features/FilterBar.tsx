"use client";
import { useProducts } from "@/store";
import Image from "next/image";
import { ChangeEvent, useEffect } from "react";

const FilterBar = () => {
  const { filters, setFilters, productCategories, getProductCategories } =
    useProducts((state) => ({
      filters: state.filters,
      productCategories: state.productCategories,
      setFilters: state.setFilters,
      getProductCategories: state.getProductCategories,
    }));
  const handleSetFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({ [name]: value });
  };

  useEffect(() => {
    getProductCategories();
  }, [getProductCategories]);

  // const convertCategories = (productCategories: string[]) => {
  //   if (!productCategories.length) return [];
  //   const res = productCategories.reduce((acc, el) => {
  //     const obj = { value: el, label: el };
  //     acc.push(obj);
  //     return acc;
  //   }, [] as { value: string; label: string }[]);
  //   return res;
  // };

  return (
    <div className="flex gap-2">
      <div className="w-[270px] rounded-30 flex px-4 py-5 border bg-secondaryWhite">
        <input
          defaultValue={filters.keyword}
          onChange={handleSetFilter}
          type="text"
          name="keyword"
          placeholder="Search"
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
        <option value="">--</option>
        {productCategories.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
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
  );
};

export default FilterBar;
