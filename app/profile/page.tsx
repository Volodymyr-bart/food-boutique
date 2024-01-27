import { getServerSession } from "next-auth/next";
import { authConfig } from "../api/auth/[...nextauth]/options";
import Image from "next/image";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && (
        <Image
          src={session?.user?.image}
          alt={session?.user?.name || "image"}
          priority
          width={74}
          height={74}
        />
      )}
    </div>
  );
}
