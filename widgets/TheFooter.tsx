import SubscribeForm from "@/features/SubscribeForm/ui/SubscribeForm";
import Image from "next/image";
import Link from "next/link";

const TheFooter = () => {
  return (
    <footer className="mt-auto flex flex-col gap-32 bg-primaryGreen w-full mobile:px-5 desktop:px-24 ">
      <div className="mt-10 mobile:flex flex-col tablet:flex-row tablet:justify-between desktop:justify-between desktop:gap-4">
        <div className="flex flex-col gap-5">
          <Link className="flex items-center gap-2" href={"/"}>
            <div className="flex justify-center items-center bg-primaryGreen w-8 h-8 rounded-30">
              <Image
                src="/tdesign_cabbage.png"
                alt="Logo"
                className="dark:invert bg-primaryGreen "
                width={20}
                height={20}
                priority
              />
            </div>
            <b className="text-primaryWhite font-black text-nowrap mobile:text-4.5 mobile:leading-5 tablet:text-6 tablet:leading-6">
              Food Boutique
            </b>
          </Link>
          <div className="flex gap-3">
            <Link
              href={"https://www.facebook.com/goITclub/"}
              target="_blank"
              className="flex w-11 h-11 justify-center items-center border border-primaryGrey rounded-[10px]"
            >
              <Image
                src="/icons/social/facebook.png"
                alt="Logo"
                className="dark:invert bg-primaryGreen "
                width={28}
                height={28}
                priority
              />
            </Link>
            <Link
              href={"https://www.instagram.com/goitclub/"}
              target="_blank"
              className="flex w-11 h-11 justify-center items-center border border-primaryGrey rounded-[10px]"
            >
              <Image
                src="/icons/social/instagram.png"
                alt="Logo"
                className="dark:invert bg-primaryGreen "
                width={28}
                height={28}
                priority
              />
            </Link>
            <Link
              href={"https://www.youtube.com/c/GoIT"}
              target="_blank"
              className="flex w-11 h-11 justify-center items-center border border-primaryGrey rounded-[10px]"
            >
              <Image
                src="/icons/social/youtube.png"
                alt="Logo"
                className="dark:invert bg-primaryGreen "
                width={28}
                height={28}
                priority
              />
            </Link>
          </div>
        </div>
        <div className="max-w-[430px] flex mobile:flex-col tablet:flex-wrap tablet:gap-16 desktop:max-w-full desktop:flex-row desktop:justify-between">
          <div className="flex mobile:flex-col mobile:mt-10 mobile:gap-3.5 tablet:mt-0 tablet:gap-3.5 desktop:w-[410px] desktop:gap-5 ">
            <p className="font-medium text-primaryWhite mobile:text-6 mobile:leading-7 tablet:text-10 tablet:leading-11">
              Discover the Variety of Flavors and Quality
            </p>
            <p className=" text-primaryWhite mobile:text-3.5 mobile:leading-4.5 tablet:text-4.5 tablet:leading-6">
              An online store where you will find fresh, natural and delicious
              products for a healthy life and unforgettable gastronomic
              adventures.
            </p>
          </div>
          <div className="flex flex-col gap-5 mobile:mt-20 tablet:w-[336px] tablet:mt-0">
            <SubscribeForm />
          </div>
        </div>
      </div>
      <div className="flex text-primaryWhite text-3.5 leading-4.5 mobile:flex-col mobile:gap-2  tablet:flex-row tablet:justify-between mb-5 text-xl ">
        <p>Food Boutique. All rights reserved.</p>
        <p>Privacy Policy / Terms of Service</p>
      </div>
    </footer>
  );
};

export default TheFooter;
