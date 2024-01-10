import Image from "next/image";
import { ProductInCart } from "../types/Product";
import { shallow } from "zustand/shallow";
import { useCartProducts } from "@/store/stateCart";

type Props = {
  product: ProductInCart;
};

const ProductBasket = ({ product }: Props) => {
  const {
    deleteProductFromCart,
    incrementQuantityProduct,
    decrementQuantityProduct,
  } = useCartProducts(
    (state) => ({
      deleteProductFromCart: state.deleteProductFromCart,
      incrementQuantityProduct: state.incrementQuantityProduct,
      decrementQuantityProduct: state.decrementQuantityProduct,
    }),
    shallow
  );
  const { img, name, category, size, price, _id, amount } = product;
  return (
    <li className="flex gap-10 justify-between border-b-2 border-primaryGrey py-10">
      <div className="flex bg-secondaryWhite rounded-30 p-2">
        <Image src={img} alt={name} priority width={74} height={74} />
      </div>
      <div className="flex flex-col gap-2">
        <h3>{name}</h3>
        <span className="">
          Category:<span className="">{category}</span>
        </span>
        <span className="">
          Size:<span className="">{size}</span>
        </span>
        <span className="">
          Price:<span className="">${price}</span>
        </span>
      </div>
      <div className="flex items-center">
        <button
          className="rounded-l-30 pl-4 pr-1.5 py-[7.5px] border-l-2 border-t-2 border-b-2 border-primaryGrey"
          onClick={() => decrementQuantityProduct(_id)}
          disabled={amount === 1}
        >
          <Image
            src="/icons/minus.png"
            alt="minus"
            priority
            width={18}
            height={18}
          />
        </button>
        <span className="py-1 border-t-2 border-b-2 border-primaryGrey">
          {amount}
        </span>
        <button
          className="rounded-r-30 pr-4 pl-1.5 py-[7.5px]  border-t-2 border-b-2 border-r-2 border-primaryGrey"
          onClick={() => incrementQuantityProduct(_id)}
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
      <button onClick={() => deleteProductFromCart(_id)}>
        <Image
          src="/icons/close.png"
          alt="close"
          priority
          width={18}
          height={18}
        />
      </button>
    </li>
  );
};

export default ProductBasket;
