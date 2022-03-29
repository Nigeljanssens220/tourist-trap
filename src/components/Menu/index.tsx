/* eslint-disable @next/next/no-img-element */
import React, { FC, ReactElement, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@/components/Button";

const Menu: FC = () => {
  const [show, setShow] = useState(false);
  const { data: session } = useSession();

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <>
      <div className='flex flex-row items-center'>
        <div>
          <button
            onClick={() => setShow(!show)}
            className='sm:block md:hidden lg:hidden text-black hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'
          >
            <img
              className='h-8 w-8'
              src='https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg'
              alt='show'
            />
          </button>
          <div
            id='menu'
            className={`md:block lg:block ${show ? "" : "hidden"}`}
          >
            <button
              onClick={() => setShow(!show)}
              className='block md:hidden lg:hidden text-black hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-30 top-0 mt-3'
            >
              <img
                className='h-8 w-8'
                src='https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg'
                alt='hide'
              />
            </button>
            <ul className='flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20'>
              <li className='text-black text-lg hover:text-gray-700 cursor-pointer md:ml-10 pt-10 md:pt-0'>
                <a>Get Started</a>
              </li>
              <li className='text-black text-lg hover:text-gray-700 cursor-pointer md:ml-10 pt-10 md:pt-0 ml-5'>
                {session ? (
                  <Button
                    onClick={() => signOut()}
                    className='outline bg-white text-black'
                  >
                    Log out
                  </Button>
                ) : (
                  <Button
                    onClick={() => signIn()}
                    className='outline bg-black text-white'
                  >
                    Log in
                  </Button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
