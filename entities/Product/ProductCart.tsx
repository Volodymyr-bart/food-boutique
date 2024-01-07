"use client";
import React from "react";
import Image from "next/image";
import { Product } from "../types/Product";
import { useCartProducts } from "@/store";
import { shallow } from "zustand/shallow";

type Props = {
  product: Product;
};

const ProductCart = ({ product }: Props) => {
  const { name, category, size, popularity, price, img } = product;

  const { addProductToCart } = useCartProducts(
    (state) => ({
      addProductToCart: state.addProductToCart,
    }),
    shallow
  );

  return (
    <li className="h-[363px] flex flex-col  gap-5 bg-secondaryWhite rounded-30 p-5">
      <div className="w-full ">
        <Image
          src={img}
          alt={name}
          className=" bg-primaryWhite bg-cover mx-auto"
          priority
          width={178}
          height={178}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-medium text-primaryBlack">{name}</h3>
        <div className="flex flex-col gap-2 mt-2.5">
          <div className="flex justify-between">
            <span className="text-xs">
              Category:<span className="span-info-value">{category}</span>
            </span>
            <span className="text-xs">
              Size:<span className="span-info-value">{size}</span>
            </span>
          </div>

          <span className="text-xs">
            Popularity:<span className="span-info-value">{popularity}</span>
          </span>
        </div>
      </div>

      <div className=" w-full flex  justify-between items-end">
        <span className="general-span-price">&#36;{price}</span>
        <button
          type="submit"
          className="w-8 h-8 rounded-30 p-2 bg-primaryGreen"
          onClick={() => {
            console.log(product);
            console.log("click");

            addProductToCart(product);
          }}
        >
          <Image
            src="/basket.png"
            alt="basket"
            priority
            width={18}
            height={18}
          />
        </button>
      </div>
    </li>
  );
};

export default ProductCart;
