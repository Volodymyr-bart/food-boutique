"use client";
import { useProducts } from "@/store";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
type FilterDataType = {
  keyword: string;
  category: string;
  byABC: boolean;
  byPrice: boolean;
};
const FilterBar = () => {
  // const [filtersData, setFiltersData] = useState<FilterDataType>({
  //   keyword: "",
  //   category: "",
  //   byABC: false,
  //   byPrice: false,
  // });
  const { filters, setFilters, productCategories, getProductCategories } =
    useProducts((state) => ({
      filters: state.filters,
      productCategories: state.productCategories,
      setFilters: state.setFilters,
      getProductCategories: state.getProductCategories,
    }));

  const handleSetFilter = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters({ [name]: value });
  };
  useEffect(() => {
    getProductCategories();
  }, [getProductCategories]);

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
        onChange={handleSetFilter}
      >
        <option value="">--</option>
        {productCategories.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
      <select
        onChange={handleSetFilter}
        name="byABC"
        id="byABC"
        className="w-[90px] rounded-30 flex px-4 py-5 border bg-secondaryWhite"
      >
        <option value="true">A-Z</option>
        <option value="false">Z-A</option>
      </select>
      <select
        defaultValue={filters.byPrice.toString()}
        onChange={handleSetFilter}
        name="byPrice"
        id="byPrice"
        className="w-[120px] rounded-30 flex px-4 py-5 border bg-secondaryWhite"
      >
        <option value="true">To hight</option>
        <option value="false">To down</option>
      </select>
      <select
        defaultValue={filters.limit}
        onChange={handleSetFilter}
        name="limit"
        id="limit"
        className="w-[90px] rounded-30 flex px-4 py-5 border bg-secondaryWhite"
      >
        <option value="9">9</option>
        <option value="15">15</option>
      </select>
    </div>
  );
};

export default FilterBar;
