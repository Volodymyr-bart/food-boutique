"use client";
import ProductBasket from "@/entities/Product/ProductBasket";
import { useCartProducts } from "@/store";
import Image from "next/image";
import { shallow } from "zustand/shallow";

const Cart = () => {
  const { products, clearCart } = useCartProducts(
    (state) => ({
      products: state.products,
      clearCart: state.clearCart,
    }),
    shallow
  );
  const totalPrice = () => {
    const total = products.reduce((acc, el) => {
      acc += el.price * el.quantity;
      return acc;
    }, 0);
    const roundedTotal = total.toFixed(2);
    return parseFloat(roundedTotal);
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center  bg-primaryGreen w-9 h-9 rounded-30">
          <Image src="/basket.png" alt="Logo" width={18} height={18} priority />
        </div>
        <p>Cart ({products.length}) </p>
      </div>
      {products.length ? (
        <section className="flex flex-col min-h-full">
          <div className="mx-auto w-full mt-5 flex gap-10">
            <div>
              {products.length ? (
                <button
                  className="p-4 bg-primaryGreen rounded-30"
                  onClick={() => clearCart()}
                >
                  Delete all <span>X</span>
                </button>
              ) : (
                <></>
              )}
              <ul className="my-4 flex flex-col gap-4">
                {products.map((item) => (
                  <ProductBasket key={item._id + item.name} product={item} />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-medium text-primaryBlack">
                YOUR ORDER
              </h3>
              <div className="flex justify-between items-center w-[534px] px-7 py-3.5 bg-primaryGrey">
                <p className="text-xl font-medium text-primaryBlack">Total</p>
                {products.length ? (
                  <p className="text-3xl font-medium text-primaryBlack">
                    ${totalPrice()}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="flex flex-col items-center my-[150px]">
          <Image
            className=" mb-10"
            src="/icons/shopping-basket.png"
            alt="shopping-basket"
            width={164}
            height={140}
            priority
          />
          <div className="flex flex-col gap-3.5 text-center">
            <h3>Your basket is empty...</h3>
            <p>
              Go to the main page to select your favorite products and add them
              to the cart.
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
