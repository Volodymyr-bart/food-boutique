"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthRoute = () => {
  const session = useSession();

  return (
    <div className="flex gap-2">
      {session?.data && (
        <button className="bg-primaryGreen rounded-30">
          <Link href="/profile">Profile</Link>
        </button>
      )}
      {session?.data ? (
        <button className="bg-primaryGreen rounded-30">
          <Link
            href="#"
            onClick={() => {
              signOut({ callbackUrl: "/" });
            }}
          >
            Sign out{" "}
          </Link>
        </button>
      ) : (
        <button className="bg-primaryGreen rounded-30">
          <Link href="/api/auth/signin">Sign In</Link>
        </button>
      )}
    </div>
  );
};

export default AuthRoute;
