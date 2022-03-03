/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <div className='bg-white overflow-hidden relative lg:flex lg:items-center max-w-screen-2xl mx-auto mb-5'>
      <div className='py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20'>
        <h2 className='text-center md:text-left text-3xl font-semibold text-black sm:text-4xl'>
          <span className='block'>Mother hearth hosts your travels</span>
        </h2>
        <p className='text-center md:text-left sm:max-w-3xl text-md mt-4 text-gray-400'>
          The state of Utah in the United States is home to lots of beautiful
          National parks, Bryce national canyon park ranks as three of the most
          magnificient &amp; awe inspiring.
        </p>
        <div className='flex lg:flex-shrink-0'>
          <div className='mx-auto md:ml-0 mt-5 inline-flex rounded-md shadow'>
            <button
              type='button'
              className='py-2 px-4 bg-black hover:bg-gray-700 focus:ring-gray-700 focus:ring-offset-gray-700 text-white w-full transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg '
            >
              Search flights
            </button>
          </div>
        </div>
      </div>
      <div className=' mx-auto lg:mr-4 flex items-center gap-8 px-8 lg:py-4'>
        <div className='overflow-hidden'>
          <Image
            src='/images/hero1.jpg'
            alt='waves2'
            className='rounded-lg border-8 border-red-900'
            width='800'
            height='800'
            objectFit='cover'
          />
        </div>
        <div className='hidden md:block flex-col '>
          <Image
            src='/images/hero1.jpg'
            alt='waves2'
            className='rounded-lg '
            width='300'
            height='200'
            objectFit='cover'
          />
          <Image
            src='/images/hero1.jpg'
            alt='waves2'
            className='rounded-lg '
            width='300'
            height='200'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
