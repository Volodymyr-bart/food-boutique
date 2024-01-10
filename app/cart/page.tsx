"use client";
import BasketProducts from "@/features/BasketProducts/ui/BasketProducts";
import EmptyBasket from "@/features/EmptyBasket/ui/EmptyBasket";
import OrderForm from "@/features/OrderForm/ui/OrderForm";
import { useCartProducts } from "@/store/stateCart";
import Image from "next/image";
import { shallow } from "zustand/shallow";

const Cart = () => {
  const { products } = useCartProducts(
    (state) => ({
      products: state.products,
    }),
    shallow
  );
  const totalPrice = () => {
    const total = products.reduce((acc, el) => {
      acc += el.price * el.amount;
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
            <BasketProducts />
            <div>
              <h3 className="text-3xl font-medium text-primaryBlack">
                YOUR ORDER
              </h3>
              <div className="flex justify-between items-center w-[534px] px-7 py-3.5 bg-primaryGrey">
                <p className="text-xl font-medium text-primaryBlack">Total</p>
                <p className="text-3xl font-medium text-primaryBlack">
                  ${totalPrice()}
                </p>
              </div>
              <OrderForm />
            </div>
          </div>
        </section>
      ) : (
        <EmptyBasket />
      )}
    </>
  );
};

export default Cart;
