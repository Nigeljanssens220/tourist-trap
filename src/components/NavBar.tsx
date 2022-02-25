import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import Menu from "./Menu";

type Props = {};

const NavBar: FC = (props: Props) => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-center mt-5 mx-5 max-w-screen-2xl lg:mx-auto ">
      <div className="flex flex-grow justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 ">
        <a className="hover:cursor-pointer font-italic text-2xl ">
          Tourist Trap
        </a>
        <div className="flex items-center mr-4">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
