"use client";
import ProductBasket from "@/entities/Product/ProductBasket";
import { useCartProducts } from "@/store/stateCart";
import { shallow } from "zustand/shallow";

const BasketProducts = () => {
  const { products, clearCart } = useCartProducts(
    (state) => ({
      products: state.products,
      clearCart: state.clearCart,
    }),
    shallow
  );
  return (
    <>
      <div className="flex flex-col">
        <button
          className="w-max ml-auto p-4 bg-primaryGreen rounded-30"
          onClick={() => clearCart()}
        >
          Clear
        </button>
        <ul className="my-4 flex flex-col gap-4">
          {products.map((item) => (
            <ProductBasket key={item._id + item.name} product={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default BasketProducts;
