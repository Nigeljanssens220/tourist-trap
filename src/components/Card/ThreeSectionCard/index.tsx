import React, { FC } from "react";
import classNames from "classnames";
import {
  LightningBoltIcon,
  LocationMarkerIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import Typography from "@/components/Typography";
import { GlobeIcon } from "@heroicons/react/solid";
import Button from "@/components/Button";
import { signIn, useSession } from "next-auth/react";

interface ThreeSectionCardProps {
  className?: string;
}

const ThreeSectionCard: FC<ThreeSectionCardProps> = ({ className }) => {
  const { data: session } = useSession();

  const clickHandler = (): void => {
    // if not logged in, sign in when trying to book a flight
    if (!session) {
      signIn();
    }

    // else store booking in database
  };

  return (
    <>
      <div className={classNames(className, "w-full bg-gray-200 py-10")}>
        <div className='container mx-auto px-6 flex items-start justify-center'>
          <div className='w-full'>
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className='flex flex-col lg:flex-row mx-auto bg-white  shadow rounded'>
              <div className='w-full lg:w-1/3 px-12 flex flex-col items-center py-5 space-y-1 mb-2'>
                <LightningBoltIcon className='w-24 h-24' />
                <Typography variant='h2'>Fastest flight</Typography>
                <div className='flex items-center '>
                  <LocationMarkerIcon className='w-6 h-6 mr-1' />
                  <Typography variant='sm' weight='thin'>
                    London, United Kingdom
                  </Typography>
                </div>
                <div className='flex p-5'>
                  <div className='flex flex-col items-center justify-center px-8 lg:px-4 xl:px-8 border-r-2'>
                    <ClockIcon className='w-8 h-8' />
                    <Typography variant='sm' weight='thin'>
                      1h 30m
                      {/* LINK TO ACTUAL DATA HERE */}
                    </Typography>
                  </div>
                  <div className='flex flex-col items-center justify-center px-8 lg:px-4 xl:px-8'>
                    <GlobeIcon className='w-8 h-8' />
                    <Typography variant='sm' weight='thin'>
                      20g CO2
                      {/* LINK TO ACTUAL DATA HERE */}
                    </Typography>
                  </div>
                </div>
                {/* Div for price and book now button */}
                <div className='flex flex-col items-center space-y-2'>
                  <Typography variant='lg'>$ 350.00</Typography>
                  <Button
                    onClick={clickHandler}
                    className='bg-zinc-800 hover:bg-zinc-600 text-white'
                  >
                    Book now
                  </Button>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10'>
                <div className='mb-3 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer text-indigo-700'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-stack'
                    width={48}
                    height={48}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <polyline points='12 4 4 8 12 12 20 8 12 4' />
                    <polyline points='4 12 12 16 20 12' />
                    <polyline points='4 16 12 20 20 16' />
                  </svg>
                </div>
                <h2 className='text-gray-800  text-xl tracking-normal text-center font-medium mb-1'>
                  Senior Product Designer
                </h2>
                <p className='text-gray-600  text-sm tracking-normal font-normal mb-3 text-center'>
                  Freelance
                </p>
                <p className='text-gray-600  text-sm tracking-normal font-normal mb-8 text-center w-10/12'>
                  John is a true asset to us, providing advanced designing
                  skills from years of experience as UX designer.
                </p>
                <div className='flex items-start'>
                  <div className='bg-gray-200 text-gray-600 rounded text-xs leading-3 py-2 px-3'>
                    Interface
                  </div>
                  <div className='bg-gray-200 text-gray-600 rounded mx-2 text-xs leading-3 py-2 px-3'>
                    Interface
                  </div>
                  <div className='bg-gray-200 text-gray-600 rounded text-xs leading-3 py-2 px-3'>
                    Interface
                  </div>
                </div>
                <div className='mt-2 flex items-start'>
                  <div className='bg-gray-200 text-gray-600 rounded text-xs leading-3 py-2 px-3'>
                    Interface
                  </div>
                  <div className='bg-gray-200 text-gray-600 rounded mx-2 text-xs leading-3 py-2 px-3'>
                    Interface
                  </div>
                  <div className='bg-gray-200 text-gray-600 rounded text-xs leading-3 py-2 px-3'>
                    Interface
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8'>
                <h2 className='text-center text-2xl text-gray-800  font-medium tracking-normal'>
                  $90
                </h2>
                <h2 className='text-center text-sm text-gray-600  font-normal mt-2 mb-4 tracking-normal'>
                  Hourly Rate
                </h2>
                <h2 className='text-center text-2xl text-gray-800 font-medium tracking-normal'>
                  $32,000
                </h2>
                <h2 className='text-center text-sm text-gray-600  font-normal mt-2 mb-4 tracking-normal'>
                  Total Earned
                </h2>
                <h2 className='text-center text-2xl text-gray-800  font-medium tracking-normal'>
                  2000
                </h2>
                <h2 className='text-center text-sm text-gray-600 font-normal mt-2 mb-4 tracking-normal'>
                  Hours Worked
                </h2>
                <h2 className='text-center text-2xl text-gray-800  font-medium tracking-normal'>
                  95%
                </h2>
                <h2 className='text-center text-sm text-gray-600  font-normal mt-2 mb-4 tracking-normal'>
                  Success Rate
                </h2>
                <div className='flex items-center'>
                  <svg
                    className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star'
                    xmlns='http://www.w3.org/2000/svg'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path
                      fill='currentColor'
                      d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z'
                    />
                  </svg>
                  <svg
                    className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star'
                    xmlns='http://www.w3.org/2000/svg'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path
                      fill='currentColor'
                      d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z'
                    />
                  </svg>
                  <svg
                    className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star'
                    xmlns='http://www.w3.org/2000/svg'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path
                      fill='currentColor'
                      d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z'
                    />
                  </svg>
                  <svg
                    className='cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star'
                    xmlns='http://www.w3.org/2000/svg'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path
                      fill='currentColor'
                      d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z'
                    />
                  </svg>
                  <svg
                    className='cursor-pointer w-4 text-gray-200  icon icon-tabler icon-tabler-star'
                    xmlns='http://www.w3.org/2000/svg'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' fill='none' d='M0 0h24v24H0z' />
                    <path
                      fill='currentColor'
                      d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z'
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
    </>
  );
};
export default ThreeSectionCard;
