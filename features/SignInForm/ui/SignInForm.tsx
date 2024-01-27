"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";

const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log(res);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input className="p-3 rounded-30" type="email" name="email" required />
      <input
        className="p-3 rounded-30"
        type="password"
        name="password"
        required
      />
      <button className="bg-primaryGreen rounded-30" type="submit">
        Sign In
      </button>
    </form>
  );
};

export { SignInForm };
