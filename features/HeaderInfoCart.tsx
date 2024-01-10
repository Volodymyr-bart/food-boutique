"use client";
import { useCartProducts } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { shallow } from "zustand/shallow";

const HeaderInfoCart = () => {
  const { products } = useCartProducts(
    (state) => ({
      products: state.products,
    }),
    shallow
  );
  return (
    <Link href={"/cart"} className="flex items-center gap-3 ">
      <div className="flex justify-center items-center  bg-primaryGreen w-9 h-9 rounded-30">
        <Image
          src="/basket.png"
          alt="Logo"
          className="dark:invert"
          width={18}
          height={18}
          priority
        />
      </div>
      <b className="text-primaryBlack">Cart({products?.length})</b>
    </Link>
  );
};

export default HeaderInfoCart;
