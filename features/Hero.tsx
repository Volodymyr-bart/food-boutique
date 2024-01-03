import Image from "next/image";

const Hero = () => {
  return (
    <>
      <h1 className="text-7xl font-medium mt-12">
        Welcome to the <span className="text-primaryGreen ">Food</span>{" "}
        Boutique!
      </h1>
      <p className="mt-5">
        With Food Boutique, you&apos;re not just subscribing to food,
        you&apos;re signing up for a fresher, fitter, and happier you.
      </p>
      <div className="relative">
        <Image
          src="/hero/Background.png"
          alt="Hero"
          width={1024}
          height={350}
          priority
          className="mt-10"
        />
        <Image
          src="/hero/label.png"
          alt="Hero"
          width={100}
          height={100}
          priority
          className="absolute top-0 right-5"
        />
      </div>
    </>
  );
};

export default Hero;
