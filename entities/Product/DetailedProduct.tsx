"use client";

import { getProductById } from "@/services/getProducts";
import { useCartProducts } from "@/store";
import { useThemeStore } from "@/store/theme";
import Image from "next/image";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

const initialStateProduct = {
  _id: "",
  name: "",
  desc: "",
  img: "",
  category: "",
  price: 0,
  size: "",
  is10PercentOff: false,
  popularity: 0,
};
const DetailedProduct = () => {
  const { productId } = useThemeStore(
    (state) => ({
      productId: state.productId,
    }),
    shallow
  );
  const [product, setProduct] = useState(initialStateProduct);

  const { products, addProductToCart, deleteProductFromCart } = useCartProducts(
    (state) => ({
      products: state.products,
      addProductToCart: state.addProductToCart,
      deleteProductFromCart: state.deleteProductFromCart,
    }),
    shallow
  );
  const fetchData = async (id: string) => {
    setProduct(initialStateProduct);

    const data = await getProductById(id);
    setProduct(data);
  };

  useEffect(() => {
    if (productId) {
      fetchData(productId);
    }
  }, [productId]);

  const isAdded = () => {
    const item = products.find((el) => el._id === product._id);
    return item?._id!!;
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex gap-6">
          <div className="w-[240px] h-[212px] flex items-center justify-center py-6.5 px-10 rounded-[10px] bg-primaryWhite">
            {product.img && (
              <Image
                src={product.img}
                alt={product.name}
                priority
                width={160}
                height={160}
              />
            )}
          </div>
          <div>
            <h3 className="text-xl font-medium text-primaryBlack">
              {product.name}
            </h3>
            <div>
              <div className="text-xs">
                <span className="text-primaryGrey">Category:</span>
                <span className="text-primaryBlack">{product.category}</span>
              </div>
              <div className="text-xs">
                <span className="text-primaryGrey">Size:</span>
                <span className="text-primaryBlack">{product.size}</span>
              </div>
              <div className="text-xs">
                <span className="text-primaryGrey">Popularity:</span>
                <span className="text-primaryBlack">{product.popularity}</span>
              </div>
            </div>
            <p className="mt-6">{product.desc}</p>
          </div>
        </div>
        <div className="mt-12 flex justify-between">
          <div>${product.price}</div>
          <button
            className="flex gap-2 items-center bg-primaryGreen rounded-30 px-6 py-3"
            onClick={() =>
              isAdded()
                ? deleteProductFromCart(product._id)
                : addProductToCart(product)
            }
          >
            <span className="text-primaryWhite">{isAdded() ? "Remove from" : "Add to"}</span>
            <Image
              src="/basket.png"
              alt="basket"
              priority
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailedProduct;
