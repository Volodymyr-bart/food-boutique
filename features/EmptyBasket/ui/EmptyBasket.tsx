import Image from "next/image";

const EmptyBasket = () => {
  return (
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
          Go to the main page to select your favorite products and add them to
          the cart.
        </p>
      </div>
    </section>
  );
};

export default EmptyBasket;
