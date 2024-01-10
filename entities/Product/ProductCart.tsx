import React from "react";
import Image from "next/image";
import { Product } from "../types/Product";
import { useCartProducts } from "@/store";
import { shallow } from "zustand/shallow";
import Modal from "@/shared/Modal/ui/Modal";
import DetailedProduct from "./DetailedProduct";
import { useThemeStore } from "@/store/theme";

type Props = {
  product: Product;
};

const ProductCart = ({ product }: Props) => {
  const { name, category, size, popularity, price, img, _id, is10PercentOff } =
    product;

  const { products, addProductToCart, deleteProductFromCart } = useCartProducts(
    (state) => ({
      products: state.products,
      addProductToCart: state.addProductToCart,
      deleteProductFromCart: state.deleteProductFromCart,
    }),
    shallow
  );

  const { isModalOpen, openModal } = useThemeStore(
    (state) => ({
      isModalOpen: state.isModalOpen,
      openModal: state.openModal,
    }),
    shallow
  );

  const isAdded = () => {
    const product = products.find((el) => el._id === _id);
    return product?._id!!;
  };

  return (
    <>
      <li className="relative h-[363px] flex flex-col  gap-5 bg-secondaryWhite rounded-30 p-5">
        <div className="w-full" onClick={() => openModal(product._id)}>
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
              <div className="text-xs text-nowrap">
                <span className="text-primaryGrey">Category: </span>
                <span className="text-primaryBlack">{category}</span>
              </div>
              <div className="text-xs text-nowrap text-end">
                <span className="text-primaryGrey">Size: </span>
                <span className="text-primaryBlack">{size}</span>
              </div>
            </div>
            <div>
              <span className="text-xs text-primaryGrey">Popularity: </span>
              <span className="text-primaryBlack">{popularity}</span>
            </div>
          </div>
        </div>

        <div className=" w-full flex  justify-between items-end">
          <span className="font-medium text-xl text-primaryBlack ">
            &#36;{price}
          </span>

          {isAdded() ? (
            <button
              type="submit"
              className="w-8 h-8 rounded-30 p-2 bg-primaryGreen"
              onClick={() => deleteProductFromCart(product._id)}
            >
              <Image
                src="/icons/check.png"
                alt="check"
                priority
                width={18}
                height={18}
              />
            </button>
          ) : (
            <button
              type="submit"
              className="w-8 h-8 rounded-30 p-2 bg-primaryGreen"
              onClick={() => {
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
          )}
        </div>
        {is10PercentOff && (
          <Image
            className="absolute top-2 right-2 w-10 h-10"
            src="/icons/discount.png"
            alt="discount"
            priority
            width={40}
            height={40}
          />
        )}
      </li>
      <Modal>{isModalOpen && <DetailedProduct />}</Modal>
    </>
  );
};

export default ProductCart;
