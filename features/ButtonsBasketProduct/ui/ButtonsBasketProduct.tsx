"use client";

import { ProductInCart } from "@/entities/types/Product";
import { useCartProducts } from "@/store/stateCart";
import Image from "next/image";
import { shallow } from "zustand/shallow";

type Props = {
  product: ProductInCart;
};
const ButtonsBasketProduct = ({ product }: Props) => {
  const { incrementQuantityProduct, decrementQuantityProduct } =
    useCartProducts(
      (state) => ({
        deleteProductFromCart: state.deleteProductFromCart,
        incrementQuantityProduct: state.incrementQuantityProduct,
        decrementQuantityProduct: state.decrementQuantityProduct,
      }),
      shallow
    );
  return (
    <>
      <div className="flex items-center justify-center ">
        <button
          className="h-[34px] rounded-l-30 pl-4 pr-1.5 py-[7.5px] border-l-2 border-t-2 border-b-2 border-primaryGrey"
          onClick={() => decrementQuantityProduct(product._id)}
          disabled={product.amount === 1}
        >
          <Image
            src="/icons/minus.png"
            alt="minus"
            priority
            width={18}
            height={18}
          />
        </button>
        <span className="h-[34px] py-1 border-t-2 border-b-2 border-primaryGrey">
          {product.amount}
        </span>
        <button
          className="h-[34px] rounded-r-30 pr-4 pl-1.5 py-[7.5px]  border-t-2 border-b-2 border-r-2 border-primaryGrey"
          onClick={() => incrementQuantityProduct(product._id)}
        >
          <Image
            src="/icons/plus.png"
            alt="plus"
            priority
            width={18}
            height={18}
          />
        </button>
      </div>
    </>
  );
};

export default ButtonsBasketProduct;
