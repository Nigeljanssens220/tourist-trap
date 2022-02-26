import React, { FC, useState } from "react";

import FormDateRangePicker from "./FormDateRangePicker";
import FormNumberPicker from "./FormNumberPicker";
import FormTextField from "./FormTextField";

const SearchFlightForm: FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-zinc-800 border border-gray-300 shadow-sm mx-auto sm:overflow-hidden">
      <div className="flex flex-col md:flex-row space-x-5 py-8 px-10 ">
        <div className="border-8">
          <div className="w-full space-y-6">
            <div className="flex space-x-6">
              <div className="w-full">
                <div className=" relative ">
                  <FormTextField id="search-form-origin" placeholder="Origin" />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <FormTextField
                    id="search-form-destination"
                    placeholder="Destination"
                  />
                </div>
              </div>
            </div>
            <FormDateRangePicker />
          </div>
        </div>
        <div className="flex items-center justify-center text-gray-100 border-2 border-yellow-500 w-96">
          <FormNumberPicker />
        </div>
      </div>
      <div className="border max-w-screen-sm">
        <span className="block rounded-md shadow-sm">
          <button
            type="button"
            className="py-2 px-4 bg-zinc-200 hover:bg-zinc-400 focus:ring-zinc-400 focus:ring-offset-zinc-400 text-zinc-800 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded "
          >
            Search
          </button>
        </span>
      </div>
    </div>
  );
};

export default SearchFlightForm;
