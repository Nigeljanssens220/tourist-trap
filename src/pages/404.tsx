import Link from "next/link";
import React from "react";

const Page404 = () => {
  return (
    <div className='flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 max-w-screen-2xl '>
      <div className='flex flex-col lg:flex-row w-full lg:w-1/2 items-center justify-center'>
        <img
          className='hidden lg:block grayscale'
          src='https://i.ibb.co/v30JLYr/Group-192-2.png'
          alt=''
        />
        <img
          className='hidden md:block lg:hidden grayscale'
          src='https://i.ibb.co/c1ggfn2/Group-193.png'
          alt=''
        />
        <img
          className='md:hidden grayscale'
          src='https://i.ibb.co/8gTVH2Y/Group-198.png'
          alt=''
        />
      </div>
      <div className='w-full lg:w-1/2 '>
        <h1 className='py-4 text-3xl lg:text-4xl font-semibold text-black'>
          Looks like you have found the doorway to the great nothing
        </h1>
        <p className='py-4 text-base text-gray-400'>
          The content you are looking for does not exist. Either it was removed,
          or you mistyped the link. Sorry about that! Please visit our hompage
          to get where you need to go.
        </p>
        <p className='py-2 text-base text-gray-400'></p>
        <Link href='/' passHref>
          <button className='w-full lg:w-auto my-4 border rounded-md px-1 sm:px-8 py-5 bg-black text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-opacity-50'>
            <a>Back to homepage</a>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
