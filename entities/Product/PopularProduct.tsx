import Image from "next/image";
import { shallow } from "zustand/shallow";
import { Product } from "../types/Product";
import { useCartProducts } from "@/store/stateCart";

type Props = {
  product: Product;
};

const PopularProduct = ({ product }: Props) => {
  const { img, name, category, size, popularity, _id } = product;

  const { products, addProductToCart, deleteProductFromCart } = useCartProducts(
    (state) => ({
      products: state.products,
      addProductToCart: state.addProductToCart,
      deleteProductFromCart: state.deleteProductFromCart,
    }),
    shallow
  );

  const isAdded = () => {
    const product = products.find((el) => el._id === _id);
    return product?._id!!;
  };

  return (
    <li className="w-[275px] flex gap-2 bg-secondaryWhite rounded-30 p-3 relative">
      <Image
        src={img}
        alt={name}
        className="bg-primaryWhite"
        priority
        width={74}
        height={74}
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-medium text-primaryBlack">{name}</h3>
        <div className="flex flex-col ">
          <div className="text-xs">
            <span className="text-primaryGrey">Category: </span>
            <span className="text-primaryBlack">{category}</span>
          </div>
          <div className="text-xs">
            <span className="text-primaryGrey">Size:</span>
            <span className="text-primaryBlack">{size}</span>
          </div>
          <div className="text-xs">
            <span className="text-primaryGrey">Popularity:</span>
            <span className="text-primaryBlack">{popularity}</span>
          </div>
        </div>
      </div>
      {isAdded() ? (
        <button
          type="submit"
          className="absolute top-3 right-3 w-5 h-5 rounded-30 p-1 bg-primaryGreen"
          onClick={() => deleteProductFromCart(product._id)}
        >
          <Image
            src="/icons/check.png"
            alt="check"
            priority
            width={12}
            height={12}
          />
        </button>
      ) : (
        <button
          type="submit"
          className="absolute top-3 right-3 w-5 h-5 rounded-30 p-1 bg-primaryGreen"
          onClick={() => {
            addProductToCart(product);
          }}
        >
          <Image
            src="/basket.png"
            alt="basket"
            priority
            width={12}
            height={12}
          />
        </button>
      )}
    </li>
  );
};

export default PopularProduct;
