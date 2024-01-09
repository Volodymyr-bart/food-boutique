import Image from "next/image";
import Link from "next/link";

const TheFooter = () => {
  return (
    <footer className="flex flex-col gap-32 bg-primaryGreen w-full desktop:px-24">
      <div className="flex gap-4 justify-between mt-10">
        <div className="flex flex-col gap-5">
          <Link className="flex items-center gap-2" href={"/"}>
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
            <b className="text-primaryWhite font-black text-xl text-nowrap">
              Food Boutique
            </b>
          </Link>
          <div className="flex gap-3">
            <div className="flex w-11 h-11 justify-center items-center border border-primaryGrey rounded-[10px]">
              <Image
                src="/icons/social/facebook.png"
                alt="Logo"
                className="dark:invert bg-primaryGreen "
                width={28}
                height={28}
                priority
              />
            </div>

            <div className="flex w-11 h-11 justify-center items-center border border-primaryGrey rounded-[10px]">
              <Image
                src="/icons/social/instagram.png"
                alt="Logo"
                className="dark:invert bg-primaryGreen "
                width={28}
                height={28}
                priority
              />
            </div>
            <div className="flex w-11 h-11 justify-center items-center border border-primaryGrey rounded-[10px]">
              <Image
                src="/icons/social/youtube.png"
                alt="Logo"
                className="dark:invert bg-primaryGreen "
                width={28}
                height={28}
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-[410px]">
          <p className="font-medium text-4xl text-primaryWhite">
            Discover the Variety of Flavors and Quality
          </p>
          <p className="text-xl text-primaryWhite">
            An online store where you will find fresh, natural and delicious
            products for a healthy life and unforgettable gastronomic
            adventures.
          </p>
        </div>
        <div className="w-[336px] flex flex-col gap-5">
          <p className="text-xl text-primaryWhite">
            Subscribe and learn about new products!
          </p>
          <input
            type="email"
            placeholder="Email"
            className="h-12 rounded-30 border pl-4 py-3"
          />
          <button className="font-medium text-xl py-3 rounded-30 bg-secondaryWhite text-primaryBlack">
            Send
          </button>
        </div>
      </div>
      <div className="flex justify-between mb-5 text-xl text-primaryWhite">
        <p>Food Boutique. All rights reserved.</p>
        <p>Privacy Policy / Terms of Service</p>
      </div>
    </footer>
  );
};

export default TheFooter;
