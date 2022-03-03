import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import Menu from "../Menu";

const NavBar: FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-center my-5 mx-5 max-w-screen-2xl lg:mx-auto ">
      <div className="flex flex-grow justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 ">
        <Link href="/">
          <a className="hover:cursor-pointer font-italic text-2xl">
            Tourist Trap
          </a>
        </Link>
        <div className="flex items-center ">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
