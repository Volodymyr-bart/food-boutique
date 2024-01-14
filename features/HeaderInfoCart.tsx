"use client";
import { useCartProducts } from "@/store/stateCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

const HeaderInfoCart = () => {
  const { products,
    // hydrate
  } = useCartProducts(
    (state) => ({
      products: state.products,
      // hydrate: state.hydrate,
    }),
    shallow
  );

  useEffect(() => {
    // hydrate();
  }, []);

  return (
    <Link href={"/cart"} className="flex items-center gap-3 ">
      <div className="flex justify-center items-center  bg-primaryGreen w-9 h-9 rounded-30">
        <Image
          src="/basket.png"
          alt="Logo"
          className=""
          width={18}
          height={18}
          priority
        />
      </div>
      <b className="text-primaryBlack hidden tablet:block">
        Cart {products.length ? `(${products.length})` : ""}
      </b>
    </Link>
  );
};

export default HeaderInfoCart;
