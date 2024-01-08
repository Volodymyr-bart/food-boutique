import Image from "next/image";

const TheFooter = () => {
  return (
    <footer className="flex flex-col gap-32 bg-primaryGreen w-full desktop:px-24">
      <div className="flex gap-4 justify-between mt-10">
        <div className="flex items-center gap-2 ">
          <div className="flex justify-center items-center  bg-primaryGreen w-8 h-8 rounded-30">
            <Image
              src="/tdesign_cabbage.png"
              alt="Logo"
              className="dark:invert bg-primaryGreen "
              width={20}
              height={20}
              priority
            />
          </div>
          <b className="text-primaryBlack">Food Boutique</b>
        </div>
        <div className="flex flex-col gap-5">
          <p>Discover the Variety of Flavors and Quality</p>
          <p>
            An online store where you will find fresh, natural and delicious
            products for a healthy life and unforgettable gastronomic
            adventures.
          </p>
        </div>
        <div className="flex flex-col">
          <p>Subscribe and learn about new products!</p>
          <input type="email" placeholder="Email" />
          <button>Send</button>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Food Boutique. All rights reserved.</p>
        <p>Privacy Policy/Terms of Service</p>
      </div>
    </footer>
  );
};

export default TheFooter;
