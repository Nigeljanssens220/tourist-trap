import getFutureDate from "@/utils/dates";
import isoDate from "@/utils/dates";
import React, { FC } from "react";
// import FormDateRangePicker from "./FormDateField/old";
import FormTextField from "./FormTextField";

const SearchFlightForm: FC = () => {
  const today = new Date();
  const tomorrow = getFutureDate(new Date(), 1);

  return (
    <div className='bg-zinc-800 border border-gray-300 shadow-sm max-w-md w-full mx-auto sm:overflow-hidden'>
      <div className='py-8 px-10'>
        <div className=''>
          <div className='w-full space-y-6'>
            <div className='flex space-x-6'>
              <div className='w-full'>
                <div className=' relative '>
                  <FormTextField id='search-form-origin' placeholder='Origin' />
                </div>
              </div>
              <div className='w-full'>
                <div className=' relative '>
                  <FormTextField
                    id='search-form-destination'
                    placeholder='Destination'
                  />
                </div>
              </div>
            </div>
            {/* <FormDateRangePicker today={today} tomorrow={tomorrow} /> */}
            <div>
              <span className='block w-full rounded-md shadow-sm'>
                <button
                  type='button'
                  className='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
                >
                  Search
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10'>
        <p className='text-xs leading-5 text-gray-500'>
          This data are display for information and can change
        </p>
      </div>
    </div>
  );
};

export default SearchFlightForm;
