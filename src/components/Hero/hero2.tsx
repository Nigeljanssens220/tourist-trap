import Image from "next/image";
import React from "react";

const Hero2 = () => {
  return (
    <div className="relative w-full max-w-screen-2xl ">
      <div className="absolute inset-x-0 bottom-0 h-1/2 " />
      <div className="mx-auto md:px-6 lg:px-8 ">
        <div className="relative  sm:rounded-2xl ">
          <div className="absolute inset-0">
            <Image
              src="/mountains-grayscale.jpg"
              alt="Hero"
              objectFit="cover"
              layout="fill"
            />
            <div className="absolute inset-0 " />
          </div>
          <div className="relative items-center justify-center mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h2 className="text-center text-3xl font-semibold text-black sm:text-5xl">
              <span className="block">Mother hearth hosts your travels</span>
            </h2>
            <p className="text-center max-w-lg mx-auto sm:max-w-3xl text-md mt-4 text-zinc-700 text-shadow">
              The state of Utah in the United States is home to lots of
              beautiful National parks, Bryce national canyon park ranks as
              three of the most magnificient &amp; awe inspiring.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a
                  href="#formSearchFlight"
                  className="flex items-center justify-center px-4 py-3 text-base font-medium rounded-md  text-black bg-white hover:bg-gray-200-50 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                >
                  Search flights
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 text-base font-medium rounded-md shadow-sm text-white bg-black bg-opacity-80 hover:bg-opacity-60 sm:px-8"
                >
                  Get inspired
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
