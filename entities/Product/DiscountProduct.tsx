import Image from "next/image";
import { shallow } from "zustand/shallow";
import { Product } from "../types/Product";
import { useCartProducts } from "@/store/stateCart";
type Props = {
  product: Product;
};

const DiscountProduct = ({ product }: Props) => {
  const { img, name, price, _id } = product;
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
    <li className="relative flex flex-col gap-2 bg-secondaryWhite rounded-30 p-4">
      <Image
        src={img}
        alt={name}
        className="bg-primaryWhite"
        priority
        width={150}
        height={150}
      />
      <div className="w-full flex justify-between items-center">
        <h3 className="text-xl font-medium text-primaryBlack">{name}</h3>

        <div className="ml-auto flex gap-2 items-center">
          <span className="font-medium text-xl text-primaryBlack">
            ${price}
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
      </div>
      <Image
        className="absolute top-3 right-3 w-15 h-15"
        src="/icons/discount.png"
        alt="basket"
        priority
        width={60}
        height={60}
      />
    </li>
  );
};

export default DiscountProduct;
