import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const TheHeader = () => {
  return (
    <header className="flex py-6 mx-24">
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
      <nav className="ml-auto flex gap-6 items-center list-none">
        <li className="px-7 py-3 bg-primaryGreen rounded-30 text-primaryWhite">
          Home
        </li>
        <li className="flex items-center gap-3 ">
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
        </li>
      </nav>
    </header>
  );
};

export default TheHeader;
