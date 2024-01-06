import ProductBasket from "@/entities/Product/ProductBasket";
import Image from "next/image";

const Cart = () => {
  return (
    <section className="flex flex-col">
      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center  bg-primaryGreen w-9 h-9 rounded-30">
          <Image
            src="/basket.png"
            alt="Logo"
            className="dark:invert"
            width={18}
            height={18}
            priority
          />
        </div>
        <p>Cart (3)</p>
      </div>
      <div className="mx-auto mt-5 flex gap-10">
        <div>
          <button>
            Delete all <span>X</span>
          </button>
          <ul>
            <ProductBasket
              product={{
                img: "",
                name: "",
                category: "",
                size: "",
                popularity: "",
              }}
            />
            <ProductBasket
              product={{
                img: "",
                name: "",
                category: "",
                size: "",
                popularity: "",
              }}
            />
            <ProductBasket
              product={{
                img: "",
                name: "",
                category: "",
                size: "",
                popularity: "",
              }}
            />
          </ul>
        </div>
        <div>
          <h3>YOUR ORDER</h3>
          <div>
            <p>Total</p>
            <p>$12,94</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
