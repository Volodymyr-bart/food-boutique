import React from "react";
import Image from "next/image";

const ProductCart = ({ product }: any) => {
  const { name, category, size, popularity, price, img } = product;

  return (
    <li className="h-[363px] flex flex-col items-center gap-5 bg-secondaryWhite rounded-30 p-5">
      <div className="img-wrapper">
        <Image
          src={img}
          alt={name}
          className="bg-primaryWhite"
          priority
          width={178}
          height={178}
        />
      </div>
      <div className="flex flex-col ">
        <h3 className="general-card-title">{name}</h3>
        <div className="flex flex-col ">
          <span className="general-span-info">
            Category:<span className="span-info-value">{category}</span>
          </span>
          <span className="general-span-info">
            Size:<span className="span-info-value">{size}</span>
          </span>
          <span className="general-span-info">
            Popularity:<span className="span-info-value">{popularity}</span>
          </span>
        </div>
      </div>

      <div className="general-card-price">
        <span className="general-span-price">&#36;{price}</span>
        <button
          type="submit"
          className="addToCart-btn js-addToCart-btn"
        ></button>
      </div>
    </li>
  );
};

export default ProductCart;
