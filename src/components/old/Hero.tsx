/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function Index() {
  const [show, setShow] = useState(false);
  const { data: session, status } = useSession();

  // get all aircraft data, do we store in DB or do we make an api call every time we load page?

  return (
    <div className="border-4 border-black flex flex-col lg:flex-row h-screen max-w-screen-2xl items-center lg:items-start mx-auto bg-white dark:bg-gray-800  ">
      <div className="border-2 border-black w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-center lg:text-left text-3xl font-extrabold text-black sm:text-4xl ">
          <span className="block">Mother hearth host your travel</span>
        </h2>
        <p className="text-center lg:text-left text-md mt-4 text-gray-400">
          The state of Utah in the united states is home to lots of beautiful
          National parks, Bryce national canion park ranks as three of the most
          magnificient &amp; awe inspiring.
        </p>
        <div className="border-2 border-green-600 items-center lg:flex-shrink-0 z-20">
          <div className="border-2 border-blue-600 flex items-center lg:items-start bg-red-600 text-white mt-6 rounded-full shadow">
            <button className="flex bg-blue-300 items-center py-2 px-4 transition ease-in text-center text-base font-semibold shadow-md rounded-full hover:outline hover:outline-black hover:bg-gray-800">
              Search Flights
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block border-8 border-blue-900 items-center gap-12 p-8 lg:p-24 ">
        <img src="/images/hero1.jpg" className="rounded-lg w-1/2" alt="Waves" />
        <div className="border-4 border-green-500 flex flex-col items-center m-auto gap-y-8 ">
          <Image
            src="/images/hero1.jpg"
            alt="waves2"
            className="rounded-lg"
            width={350}
            height={250}
            objectFit="cover"
          />
          <Image
            src="/images/hero1.jpg"
            alt="waves3"
            className="rounded-lg"
            width={350}
            height={250}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
