import DiscountProducts from "@/features/DiscountProducts/ui/DiscountProducts";
import PopularityProducts from "@/features/PopularityProducts/ui/PopularityProducts";

const AsideProducts = () => {
  return (
    <aside className="flex flex-col gap-10 desktop:w-[275px] desktop:mx-auto">
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl leading-tight">Popular products</h3>
        <PopularityProducts />
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl leading-tight">Discount products</h3>
        <DiscountProducts />
      </div>
    </aside>
  );
};

export default AsideProducts;
