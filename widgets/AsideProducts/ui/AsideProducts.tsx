import DiscountProducts from "@/features/DiscountProducts/ui/DiscountProducts";
import PopularityProducts from "@/features/PopularityProducts/ui/PopularityProducts";

const AsideProducts = () => {
  return (
    <aside className="mx-auto w-[275px] flex flex-col gap-10">
      <PopularityProducts />
      <DiscountProducts />
    </aside>
  );
};

export default AsideProducts;
