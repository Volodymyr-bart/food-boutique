import { useCartProducts } from "@/store";
import Image from "next/image";
import { shallow } from "zustand/shallow";

const DiscountProduct = ({ product }: any) => {
  const { addProductToCart } = useCartProducts(
    (state) => ({
      addProductToCart: state.addProductToCart,
    }),
    shallow
  );
  const { img, name, price } = product;
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
