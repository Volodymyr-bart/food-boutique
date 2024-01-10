import Image from "next/image";
import Link from "next/link";

const TheHeader = () => {
  return (
    <header className="flex py-6">
      <Link href={"/"} className="flex items-center gap-2">
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
      </Link>
      <nav className="ml-auto flex gap-6 items-center list-none">
        <li>
          <Link
            className="px-7 py-3 bg-primaryGreen rounded-30 text-primaryWhite"
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link href={"/cart"} className="flex items-center gap-3 ">
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
            <b className="text-primaryBlack">Cart</b>
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default TheHeader;
