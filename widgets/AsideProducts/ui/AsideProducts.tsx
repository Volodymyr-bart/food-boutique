import DiscountProducts from "@/features/DiscountProducts/ui/DiscountProducts";
import PopularityProducts from "@/features/PopularityProducts/ui/PopularityProducts";

const AsideProducts = () => {
  return (
    <aside className="flex flex-col gap-10 desktop:w-[275px] desktop:mx-auto">
      <div className="flex flex-col gap-5 text-7 leading-8 text-primaryBlack">
        <h2 className="font-medium  ">
          Popular products
        </h2>
        <PopularityProducts />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-medium text-7 leading-8 text-primaryBlack">
          Discount products
        </h2>
        <DiscountProducts />
      </div>
    </aside>
  );
};

export default AsideProducts;
