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
              <div className='w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-5 space-y-1 mb-2'>
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
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
    </>
  );
};
export default ThreeSectionCard;
