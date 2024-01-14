import Image from "next/image";
import { ProductInCart } from "../types/Product";
import ButtonsBasketProduct from "@/features/ButtonsBasketProduct/ui/ButtonsBasketProduct";

type Props = {
  product: ProductInCart;
};

const ProductBasket = ({ product }: Props) => {
  const { img, name, category, size, price } = product;
  return (
    <li className="max-w-[500px] flex gap-10 justify-between border-b-2 border-primaryGrey py-10">
      <div className="flex bg-secondaryWhite rounded-30 p-2">
        <Image src={img} alt={name} priority width={74} height={74} />
      </div>
      <div className="flex flex-col gap-2 ">
        <h3 className="font-medium text-4.5 leading-5 text-primaryBlack">
          {name}
        </h3>
        <div className="flex">
          <div className="text-3.5 leading-3.5 text-primaryBlack">
            <span className="text-primaryGrey">Category: </span>
            <span className="">{category}</span>
          </div>
          <div className="text-3.5 leading-3.5 text-primaryBlack">
            <span className="text-primaryGrey">Size: </span>
            <span className="">{size}</span>
          </div>
        </div>

        <div className="mt-auto  ">
          <span className="font-medium text-4.5 leading-5 text-primaryBlack">
            ${price}
          </span>
        </div>
      </div>
      <ButtonsBasketProduct product={product} />
    </li>
  );
};

export default ProductBasket;
