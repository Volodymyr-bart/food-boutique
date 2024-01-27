import AuthRoute from "@/features/AuthRoute/ui/AuthRoute";
import HeaderInfoCart from "@/features/HeaderInfoCart";
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
        <b className="text-primaryBlack font-black text-nowrap mobile:text-4.5 mobile:leading-5">
          Food Boutique
        </b>
      </Link>
      <nav className="ml-auto flex gap-6 items-center list-none mobile:gap-1.5">
        <li>
          <Link
            className="mobile:px-5 mobile:py-2.5 desktop:px-7 desktop:py-3 bg-primaryGreen rounded-30 text-primaryWhite"
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <AuthRoute />
        </li>
        <li>
          <HeaderInfoCart />
        </li>
      </nav>
    </header>
  );
};

export default TheHeader;
